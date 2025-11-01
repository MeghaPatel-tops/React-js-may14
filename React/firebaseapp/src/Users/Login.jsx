import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../Firebase"
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
    const handleGoogleLogin = async()=>{

        try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      

      const loggedDocRef = query(collection(db,"users"),where('email',"==",user.email));
      const loggedUser = await getDocs(loggedDocRef);

      

      if(loggedUser.docs.length>0){
        alert("Alredy Logged in");
        console.log(loggedUser.docs);
        loggedUser.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);
          
          localStorage.setItem('userId',doc.id);
          localStorage.setItem('token',user.accessToken)
          navigate('/profile');
        })
        
        
      }

      else{
         const userData ={
           "uname":user.displayName,
           "email":user.email,
           "id":user.uid
      }

      const userDoc = await addDoc(collection(db,"users"),userData);
      if(userDoc.id){
          const tokenDoc = addDoc(collection(db,"user_token"),{uid:userDoc.id,token:user.accessToken});
          localStorage.setItem('userId',userData.id);
          localStorage.setItem('token',user.accessToken)
          navigate('/profile')
      
        }
      }

     




      
      console.log("Logged in as:", user.displayName, user.email);
      alert(`Welcome ${user.displayName}!`);
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
    }
  return (
    <div>
        <div style={{  marginTop: "100px" }}>
     
       <div className="container border" style={{width:"40%"}}>
         <h2>Login </h2>
      <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
  
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
   <button
        onClick={handleGoogleLogin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop:"20px"
        }}
      >
        Sign in with Google
      </button>
       </div>
     
    </div>
    </div>
  )
}

export default Login