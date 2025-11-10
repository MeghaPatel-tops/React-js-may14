import React, { useContext, useState } from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../Firebase"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { NavLink, useNavigate } from 'react-router-dom';
import sign from 'jwt-encode';

import { useJwt } from 'react-jwt';
import { LoginContext } from '../LoginContext';

function Login() {
  const navigate = useNavigate();
  const {flag,setFlag}= useContext(LoginContext)
  const [user, setUser] = useState({})
  const token = "tops";
  const {decodedToken,isExpired} = useJwt(token)


const findUserToken = async (uid) => {
  console.log("Running findUserToken(), UID:", uid);

  const q = query(collection(db, "user_token"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  console.log("Docs found:", querySnapshot.size);

  if (querySnapshot.empty) {
    console.log("No token found for this UID.");
    return false;
  }

  for (const doc1 of querySnapshot.docs) {
    console.log("Found doc:", doc1.id, "=>", doc1.data());
    await deleteDoc(doc(db,"user_token",doc1.id))
  }

  return true;
};

  
   const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

   const handleClick = async () => {
  try {
    const q = query(
      collection(db, "users"),
      where('email', '==', user.email),
      where('pwd', '==', user.pwd)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No user found or invalid credentials");
    } else {
      querySnapshot.forEach(async(doc) => {
      const flag =await  findUserToken(doc.id);
      
      const secret = "tops";
      const jwt =sign(doc.data,secret);
      console.log(jwt);
      let tokenStore = await addDoc(collection(db,"user_token"),{uid:doc.id,token:jwt});
        console.log(tokenStore);
        localStorage.setItem('firebaseUID',doc.id);
        localStorage.setItem('firebaseTOKEN',jwt);
        
        //console.log("User found:", doc.id, doc.data());
        setFlag(1);
        navigate('/profile')
      });
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};


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
           setFlag(1);
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
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} name="email"/>
    
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} name="pwd"/>
    </div>
  <div className="form-group">
      <span>Create your Account <NavLink to={"/registration"}>Sign up</NavLink></span>
    </div>
    <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
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