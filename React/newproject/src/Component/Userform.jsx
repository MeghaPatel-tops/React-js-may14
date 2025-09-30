import React, { useEffect, useRef } from 'react'

function Userform() {
    const inputRef = useRef("");
    const count = useRef(0)

    useEffect(()=>{
        inputRef.current.focus();
    })
  return (
    <div>
        <input type="text" name="" id="" ref={inputRef} />
        <div style={{margin:"50px"}}>
            <h1> Counter App with Useref hook</h1>
                <button onClick={()=>{
                    count.current=count.current+1;
                    console.log(count.current);
                    
                }}>+</button>
                <span>
                    {count.current}
                </span>
                <button onClick={()=>{
                    count.current=count.current-1;
                     console.log(count.current);
                }}>-</button>
        </div>
    </div>
  )
}

export default Userform