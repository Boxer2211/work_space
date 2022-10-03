import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ContextDragonInfo } from '../../App';
import { Context } from '../../index';
import { DRAGON_ROUTE, PROFILE_ROUTE } from '../../utils/consts';
import './Menu.css';


function MenuList({active, setActive}) {
           
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const userLogo = user.photoURL
    const userName = user.displayName
    const{dragonInfo} = useContext(ContextDragonInfo)
    const navigate = useNavigate();
            
    return (
    <div className={active ? 'Menu__list active' : 'Menu__list'} onClick={() => setActive(false)}>    
        <div className='Menu__blur' />
        <div className='Menu__content' onClick={e => e.stopPropagation()}>
            <div className='Menu__user User'>
                <div className='User__logo' onClick={() => navigate(PROFILE_ROUTE)}>
                    <img src={userLogo} alt="user logo" />
                </div>
                <div className='User__name' onClick={() => navigate(PROFILE_ROUTE)}>
                    {userName}
                </div>
                <button className='User__signOut' onClick={() => auth.signOut()}>Sign Out</button>
            </div>
            <ul>
                {dragonInfo.map(dragonInfo =>
                    <li key={dragonInfo.name} onClick={() => navigate(DRAGON_ROUTE + '/' + dragonInfo.name)}>
                        <div><img src={dragonInfo.flickr_images[0]} alt="Dragon foto" /></div>
                        <p>{dragonInfo.name}</p>
                    </li> )}
                                 
            </ul>
        </div>
    </div>
          
     
  );
}

export default MenuList;