import React,{useContext} from 'react';
import { Context } from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


function Navbar() {
  
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
 
  return (
    <div className='Navbar'>    
        <div className='Navbar__container'>
          <div className='Navbar__logo logo'>
            <a href='/main' className='logo__button'>DRAGON</a>
          </div>
        </div>      
    </div>  
  );
}

export default Navbar;