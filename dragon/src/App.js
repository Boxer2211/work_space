import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Background from './components/background/background';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Background />
         
      
    </BrowserRouter>  
  );
}

export default App;
