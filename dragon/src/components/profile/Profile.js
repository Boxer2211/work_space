import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';
import Menu from '../menu/Menu';
import './Profile.css';


function Profile() {
  
   const {auth} = useContext(Context)
   const [user] = useAuthState(auth)
   
   let getArray = [1]
   if(localStorage.getItem('favorites') === false){
    getArray = [0]
   }
   else{
    getArray = JSON.parse(localStorage.getItem('favorites') || '0');
   }
  
     

   console.log(getArray.length);
 
   return (
    <div className='Profile'>    
        <Menu />
        <div className='Profile__information'>
            <div className='Profile__logo'>
                <img src={user.photoURL} />
            </div>
            <div className='Profile__user'>
                <p>Your email: {user.email}</p>
                <p>Your profile name: {user.displayName}</p>
            </div>
        </div>
        <div className='Profile__favorits'>
            <p className='Profile__text'>Your favorites Dragon:</p>
            {getArray.length === 0 ? 
            (<p>You not have favorites Dragon</p>)
            :
            (getArray.map((text, index) => {
                return (
                <div className='Profile__items' key={index}>
                    <p key={index}>{text}</p> <button>DELETE</button>
                </div>)
            })
            
            )

            }
            
        </div>   
    </div>  
  );
}

export default Profile;