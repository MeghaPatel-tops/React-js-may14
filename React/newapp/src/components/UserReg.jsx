import React, { useState } from 'react'

function UserReg() {
    const [user,setUser] = useState({})

    const handlChange = (e)=>{
          const {name,value}=e.target;
          setUser({
             ...user,
             [name]:value
          })
    }

    const handleClick = ()=>{
        console.log(user);
        
    }
  return (
    <div>
        
         <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"50px"}}>
            <h1>User Registarion form</h1>
            <fieldset style={{padding:"50px"}}>
                <legend>Rgisration</legend>
                <label htmlFor="">Enter User Name</label>
                <input type="text" name="username" id="" onChange={handlChange}/>
                
                <br /><br />
                <label htmlFor="">Enter User Email</label>
                <input type="text" name="email" id=""  onChange={handlChange}/>
                
                <br /><br />
                <label htmlFor="">Enter User Contact</label>
                <input type="text" name="contcat" id=""  onChange={handlChange}/>
                
                <br/><br />
                <input type="button" value="Add" onClick={handleClick} />
                <br /><br />
            </fieldset>
            
        </div>
    </div>
  )
}

export default UserReg