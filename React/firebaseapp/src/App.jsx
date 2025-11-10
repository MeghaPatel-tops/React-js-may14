import { useContext, useEffect, useState } from 'react'

import { db } from './Firebase'
import Productadd from './Product/Productadd'
import Productindex from './Product/Productindex'
import Login from './Users/Login'
import ProductEdit from './Product/ProductEdit'
import Profile from './Users/Profile'
import Registraion from './Users/Registraion'
import Logout from './Users/Logout'
import { LoginContext } from './LoginContext'
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [flag,setFlag]= useState(0);
  



  return (
    <>
    <LoginContext.Provider value={{flag,setFlag}}>
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Ecom</a>
    </div>
    <ul className="nav navbar-nav">
     
      <li><NavLink to={"/product"} className={"active"}>Product</NavLink></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
     {
         flag==0 ?  <li><NavLink to={"/login"} >Login</NavLink></li>
         :
          <li><NavLink to={"/logout"} >Logout</NavLink></li>
     }
    </ul>
  </div>
</nav>
     
          <Routes>
              <Route path='/productadd' element={<Productadd />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/product' element={<Productindex />}></Route>
              <Route path='/product/edit/:id' element={<ProductEdit />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/registration' element={<Registraion />}></Route>
              <Route path='/logout' element={<Logout />}></Route>


          </Routes>
      
     </LoginContext.Provider>
    </>
  )
}

export default App
