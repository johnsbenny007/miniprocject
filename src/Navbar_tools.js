import React from 'react'
import "./Navbar_tools.css";
function Navbar_tools() {
  return (
    <div className="Navbar">
        <p>Choose<br/>Your Service Today!</p>
        <div className='Navbar-search'>
            <input type="text" />
            <button>Search</button>
        </div>
        
    </div>
  )
}

export default Navbar_tools