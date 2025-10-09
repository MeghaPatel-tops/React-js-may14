import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        let user1 = localStorage.getItem('user');
        user1 = JSON.parse(user1);
        if(user1 == null){
            navigate('/login')
        }
        setUser(user1)
    },[])
  return (
    <div>
       <h1>Welcome {user.username}</h1>
       
    </div>
  )
}

export default Profile