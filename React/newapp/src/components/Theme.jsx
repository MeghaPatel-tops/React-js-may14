import React, { useState } from 'react'

function Theme() {
    const [ctheme,setCtheme] = useState("dark");
    const [cstyle,setCstyle] = useState({backgroundColor:"black",color:"white"})

    const handleClick = ()=>{
        console.log("current theme",ctheme);
        
        if(ctheme=='dark'){
            setCtheme('Light');
            setCstyle({
                backgroundColor:"white",color:"black"
            })
        }
        else{
             setCtheme('dark');
            setCstyle({
                backgroundColor:"black",color:"white"
            })
        }
    }
  return (
    <div style={cstyle}>
        <button  onClick={handleClick}>{ctheme == "dark" ? 'Light':'dark'}</button>
        <h1>Theme base on condition</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias rem, totam voluptatum recusandae doloremque aliquam dignissimos consequuntur iusto eveniet assumenda. Delectus cupiditate facilis sed est fuga non iste molestiae voluptatum?</p>
    </div>
  )
}

export default Theme