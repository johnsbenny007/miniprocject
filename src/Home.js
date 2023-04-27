import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import Banner from './Banner'
function Home() {
  return (
    <div className='Home-main'>
    <div className='Home' >
        <Navbar/>
        <Banner/>
    </div>
    </div>
  )
}

export default Home