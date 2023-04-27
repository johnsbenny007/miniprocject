import React from 'react'
import "./Slide.css"
import Bar from './Bar'
function Slide() {
  return (
    <div className='slide'>
        <Bar background="#31ADE0" title="Audio to text"/>
        <Bar background="#BCDD58" title="Text to audio"/>
        <Bar background="#A57AFF" title="Image Generator"/>
        <Bar background="1BD2A2" title="File Compressor"/>
    </div>
  )
}

export default Slide