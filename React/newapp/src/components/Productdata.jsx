import React, { useEffect, useState } from 'react'

function Productdata() {

    const [count,setCount] = useState(0);
    const [fruits,setFruits]= useState([]);
 

    const addFruits= ()=>{
        let fru = prompt("Enter fruit name");
        setFruits([...fruits,fru]);
    }

    useEffect(()=>{

        let timeSeq = setInterval(()=>{
            console.log("create",count);
            
            setCount(count+1)
        },1000)

        return ()=>{
            console.log("clear");
            clearInterval(timeSeq)
        }

        console.log("use effect  called");
        console.log("fruits:",fruits);
        
    },[count])

  return (
    <div>Productdata
        <h1>count:{count}</h1>
        <button onClick={()=>{
            // setCount(count+1)
        }}>+</button>


        <button onClick={addFruits}>
            add fruits
        </button>
    </div>
  )
}

export default Productdata