import React, { useState } from 'react';
import BurgerMenuImg from '../img/BurgerMenu.svg'
import bascet from '../img/Frame.svg';
import hart from '../img/Frame (1).svg';
import usericon from '../img/Frame (2).svg';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import {toolkitSlise} from './Redux_toolkit/toolkitSlice';




function Navbar() {
  
    const [menuActive, setMenuActive] = useState (false)
    const [userActive, setUserActive] = useState (false)
    const [favoritActive, setfavoritActive] = useState (false)
    const [bascetActive, setbascetActive] = useState (false)
    
    const navigate = useNavigate();

    const {user} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()
    
    const {Auth} = toolkitSlise.actions

    console.log(user);

    return (
    <div className="header">
        <div className="header__container">
            <div className="header__menu">
                <input className="header__burger" type="image" src={BurgerMenuImg} alt="Кнопка «menu»" onClick={() => setMenuActive(!menuActive)}></input>
                <div className={menuActive ? 'Menu__list active' : 'Menu__list'} onClick={() => {
                    setMenuActive(false);
                    }}>    
        
                    <div className='Menu__content' onClick={e => e.stopPropagation()}>
                        <div className='Burger__container'>
                            <p onClick={() => navigate(MAIN_ROUTE)}>Головна</p>
                            <p onClick={() => navigate(SHOP_ROUTE)}>Католог</p>
                            <p onClick={() => navigate(CONTACTS_ROUTE)}>Про нас</p>
                            <p onClick={() => navigate(CONTACTS_ROUTE)}>Контакти</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header__nav">
                
                <p onClick={() => navigate(SHOP_ROUTE)}>КАТАЛОГ</p>
                <p onClick={() => navigate(CONTACTS_ROUTE)}>ПРО НАС</p>
            </div>

            <div className="header__logo">
                <p onClick={() => navigate(MAIN_ROUTE)}>KSU SHOP</p>
            </div>

            <div className="header__icon">
                <div onClick={() => setUserActive(!userActive)}><img src={usericon} alt="hart"/></div>
                <div onClick={() => setfavoritActive(!favoritActive)}><img src={hart} alt="hart" /></div>
                <div onClick={() => setbascetActive(!bascetActive)}> <img src={bascet} alt="hart" /></div>
                <div className={userActive ? 'userMenu active' : 'userMenu'} onClick={() => {
                    setUserActive(false);
                    }}>    
                    <div className='userMenu__content' onClick={e => e.stopPropagation()}>
                        bascet
                    </div>
                </div>
                <div className={favoritActive ? 'userMenu active' : 'userMenu'} onClick={() => {
                    setfavoritActive(false);
                    setbascetActive(false);
                    }}>  
                    <div className='userMenu__content' onClick={e => e.stopPropagation()}>
                        hart
                    </div>
                </div>
                <div className={bascetActive ? 'userMenu active' : 'userMenu'} onClick={() => {
                    setbascetActive(false);
                    }}>  
                    <div className='userMenu__content' onClick={e => e.stopPropagation()}> 
                        
                        <input type="button" value={'Авторизуватись'} onClick={() => dispatch(Auth())}/>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  );
}

export default Navbar;
