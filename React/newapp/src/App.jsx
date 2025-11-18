import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import { Comman,Test } from './components/Comman'
import Counterapp from './components/Counterapp'
import StyleCompo from './components/StyleCompo'
import Theme from './components/Theme'
import Header from './components/Header'
import UserReg from './components/UserReg'
import Productdata from './components/Productdata'
import Productfilter from './Productfilter'

function App() {
  const [count, setCount] = useState(0)
  const name="megha"
  return (
   
        <div>
          <Productfilter />
       </div>
    
  )
}

export default App
