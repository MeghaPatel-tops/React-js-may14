import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counterapp from './Counterapp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Counterapp />
      
    </>
  )
}

export default App
