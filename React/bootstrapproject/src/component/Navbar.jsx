import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  console.log(user);
  
  const navigate = useNavigate();
  const logout = ()=>{
      localStorage.removeItem('user');
      navigate('/');
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <NavLink to={'/home'} className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
           <NavLink to={'/about'} className="nav-link">About</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to={'/product'} className="nav-link">Product</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {
          ( user != null)  ?  <button type="button" className="nav-link" onClick={logout}>Logout</button>:
           <NavLink to={'/login'} className="nav-link">Login</NavLink>
        }
       
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar