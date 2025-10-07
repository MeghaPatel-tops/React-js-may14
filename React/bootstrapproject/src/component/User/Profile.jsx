import React, { useEffect, useState } from 'react'

function Profile() {
    const [user,setUser] = useState({});
    useEffect(()=>{
        let user1 = localStorage.getItem('user');
        user1 = JSON.parse(user1);
        setUser(user1)
    },[])
  return (
    <div>
       <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Profile