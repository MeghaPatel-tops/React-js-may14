import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { db } from './Firebase'
import Productadd from './Product/Productadd'
import Productindex from './Product/Productindex'
import Login from './Users/Login'
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Ecom</a>
    </div>
    <ul className="nav navbar-nav">
     
      <NavLink to={"/product"} className={"active"}>Product</NavLink>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
     
          <Routes>
               <Route path='/productadd' element={<Productadd />}></Route>
               <Route path='/product' element={<Productindex />}></Route>
          </Routes>
      
     
    </>
  )
}

export default App
