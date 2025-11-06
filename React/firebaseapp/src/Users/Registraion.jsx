import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { db } from '../Firebase';

function Registraion() {
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleClick = async()=>{
        let doc = await addDoc(collection(db,"users"),user);
        if(doc){
            alert(doc.id);
            navigate('/login');
        }

    }
  return (
    <div>
            <div style={{  marginTop: "100px" }}>
     
       <div className="container border" style={{width:"40%"}}>
         <h2>Registration </h2>
      <form>
         <div class="form-group">
      <label for="exampleInputEmail1">UserName</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" name='username' onChange={handleChange} />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={handleChange}/>
    
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  name="pwd"  onChange={handleChange}/>
    </div>
    <div class="form-group">
    <span>Alredy User? <NavLink to={"/login"}>Login</NavLink></span>
 
    </div>
  
    <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
  </form>
  </div>
  </div>
    </div>
  )
}

export default Registraion