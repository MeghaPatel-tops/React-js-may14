import React, { useState } from 'react'
import InlineExample from './InlineExample';

function Counterapp() {

    const [count,setCount] = useState(0);
    const [name,setName] = useState("");

    const handleChange = (e)=>{
        console.log(e.target.value);
        
            setName(e.target.value)
    }

  return (
    <div>
        <h1>Counterapp</h1>
        <button  onClick={()=>{
            setCount(count+1)
        }}>+</button>
         <span>Conut:{count}</span> 
         <button onClick={()=>{
            setCount(count-1);
         }}>-</button>

         <fieldset>
            <legend>Registration form</legend>
            <label htmlFor="">Enter Name</label>
            <input type="text" name="uname" id="" onChange={handleChange} />
            <p>{name}</p>
         </fieldset>
         <InlineExample />
    </div>
  )
}

export default Counterapp