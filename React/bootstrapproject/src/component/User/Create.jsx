import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [formData ,setFormData] = useState({});
    const navigate = useNavigate();

    const handlChange = (e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleClick =async()=>{
        try {
            let prevUser = await axios.get('http://localhost:5000/users?email='+formData.email);
            console.log(prevUser.data);
            if(prevUser.data && prevUser.data.length >0){
                alert("Email already Exits");
            }
            else{
                 let res = await axios.post('http://localhost:5000/users',formData);
                if(res.status ==201){
                    alert("user created successfully");
                    navigate('/login');
                }
            }
           
            
        } catch (error) {
            console.log(error.message);
        }
        
    }

  return (
    <div>
        <h1>Registration form</h1>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" onChange={handlChange} />
  
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Enter your Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handlChange}/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={handlChange}/>
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Enter Contact </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="contact" onChange={handlChange}/>
  
  </div>
  
  <button type="button" class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default Create