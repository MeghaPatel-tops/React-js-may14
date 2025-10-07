import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [logData,setLogData]= useState({});
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setLogData({
            ...logData,
            [name]:value
        })
    }

    const hadleClick = async()=>{
        try {
            let url =`http://localhost:5000/users?email=${logData.email}&password=${logData.password}`; 
            let logUser = await axios.get(url);
            console.log(logUser.data);
            let user = logUser.data[0];
            if(user){
                localStorage.setItem('user',JSON.stringify(user));
                alert("Login success");
                navigate('/profile');
            }
            else{
                alert("Login fail");
            }
            
        } catch (error) {
            
        }
        
    }
  return (
    <div> <div>
        <h1>Registration form</h1>
        <form>
  
    <div class="form-group">
    <label for="exampleInputEmail1">Enter your Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange}/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={handleChange}/>
  </div>
  
  
  <button type="button" class="btn btn-primary" onClick={hadleClick}>Submit</button>
</form>
    </div></div>
  )
}

export default Login