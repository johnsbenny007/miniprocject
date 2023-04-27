import Tools from './Tools';
import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Text_to_audio from './Text_to_audio';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path='/'  element={[<Home/>]}/> 
          <Route path='/tools' element={<Tools/>}/>
          <Route path='/text' element={<Text_to_audio/>}/>
          
        </Routes>
         
      </div>
    </Router>
  );
}

export default App;
