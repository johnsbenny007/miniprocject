import React from 'react'
import "./Banner.css"
import Banner_image from "./Assets/Banner_image.jpg"
function Banner() {
  return (
    <div className='Banner'>
        <div className='Banner-container_1'>
            <h1 className='h1_1'>EveryThing</h1><h1> You Need <br/>to create a Video</h1>
            <p>Integrate all the essential  video resources into a
  single web application.<br/>Reframe makes it easier 
     to produce high quality videos and improve
                         your work flow</p>
            <button>Getting Started</button>
        </div>
        <img src={Banner_image} alt="Banner image"/>
    </div>
  )
}

export default Banner