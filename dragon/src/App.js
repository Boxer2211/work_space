import React,{createContext, useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Background from './components/background/background';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from "./index";
import Loader from './components/loader/Loader';

export const ContextDragonInfo = createContext(null)

function App() {
  
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  const [dragonInfo, setDragonInfo] = useState({});  
  
    useEffect(() => {
      const api_url = "https://api.spacexdata.com/v4/dragons";
      fetch(api_url)
      .then(res => res.json())
      .then(data => {setDragonInfo(data)})
    
  }, [])
 
  if(loading) {
    return (
      <BrowserRouter>
        <Navbar />
        <Loader />
        <Background />
      </BrowserRouter> 
      )
  }
  return (
    <BrowserRouter>
      <ContextDragonInfo.Provider value={{dragonInfo}}>
        <Navbar />
        <AppRouter /> 
        <Background />
      </ContextDragonInfo.Provider>
    </BrowserRouter>  
  );
}

export default App;
