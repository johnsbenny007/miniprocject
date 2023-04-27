import React from 'react'
import './Navbar.css'
import Final_ from "./Assets/Final_.png"
function Navbar() {
  return (
    <div className="navbar">
        <div className='navbar-image'>
          <img src={Final_} alt='image'/>
          <h1 className='h1_1'>R</h1><h1>eframe</h1>
        </div>
        <div className='navbar-container'>
            <a>About</a>
            <a>Services</a>
            <a>Help</a>
            <div className="navbar-sign">
              <button className='navbar-login'>Login</button>
              <a>Signup</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar