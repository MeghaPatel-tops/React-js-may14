import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import First from './component/First'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Create from './component/User/Create'
import Login from './component/User/Login'
import Profile from './component/User/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container-fluid">
          <Navbar />
          <div className="container">
            <Routes>
                
                 <Route path='/home' element={<Home />}>

                 </Route>
                 <Route path='/about' element={<About />}>

                 </Route>
                  <Route path='/registration' element={<Create />}>

                 </Route>
                  <Route path='/login' element={<Login />}>

                 </Route>
                 <Route path='/profile' element={<Profile />}>

                 </Route>
            </Routes>
          </div>

        </div>
    </>
  )
}

export default App
