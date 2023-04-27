import React,{useState} from 'react'
import {useSpeechSynthesis} from 'react-speech-kit';
import "./Text_to_audio.css";
function Text_to_audio() {
    const [value,setValue]=useState("");
    const {speak}=useSpeechSynthesis();
    const {cancel}=useSpeechSynthesis();

    
  return (
    <div className="Speech">
        <div className='group'>
            <h1>Text to Audio Converter</h1>
        </div>
        <div className='group'>
            <textarea rows={10} onChange={(e)=> setValue(e.target.value)} />
        </div>
        <div className='group'>
            <button onClick={()=> speak({text:value})}>Speech</button>
            <button onClick={()=> cancel({text:value})}>Stop</button>
        </div>

    </div>
  )
}

export default Text_to_audio