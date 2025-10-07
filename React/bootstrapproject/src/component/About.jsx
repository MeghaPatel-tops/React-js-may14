import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>About</h1>
        <button onClick={()=>{
            navigate('/home');
        }}>Back to Home</button>
    </div>
  )
}

export default About