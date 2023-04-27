import React from 'react';
import './Bar.css'

function Bar({background,title}) {
    
   
  return (
    <div className='bar'>
        <button style={{backgroundColor:`${background}`}} >{title}</button>
    </div>
  )
}

export default Bar