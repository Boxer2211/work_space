import React, { useContext } from 'react';
import { Context } from '../..';
import './Login.css';
import firebase from 'firebase/compat/app'


function Login() {
  
  const {auth} = useContext(Context) 

  const login = async() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user);
}
 
return (
    <div className='Login'>    
      <div className='Login__container'>
        <p>You must be authorized to use</p>
        <button onClick={login} className="Login__button">Login with Google</button>
      </div>
    </div>  
  );
}

export default Login;