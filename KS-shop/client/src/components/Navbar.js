import React, { useState } from 'react';
import BurgerMenuImg from '../img/BurgerMenu.svg'
import bascet from '../img/Frame.svg';
import hart from '../img/Frame (1).svg';
import usericon from '../img/Frame (2).svg';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../utils/consts';


function Navbar() {
  
    const [menuActive, setMenuActive] = useState (false)
    const [userActive, setUserActive] = useState (false)
    
    const navigate = useNavigate();


    return (
    <div className="header">
        <div className="header__container">
            <div className="header__menu">
                <input className="header__burger" type="image" src={BurgerMenuImg} alt="Кнопка «menu»" onClick={() => setMenuActive(!menuActive)}></input>
                <div className={menuActive ? 'Menu__list active' : 'Menu__list'} onClick={() => setMenuActive(false)}>    
        
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
                <div onClick={() => setUserActive(!userActive)}><img src={hart} alt="hart" /></div>
                <div onClick={() => setUserActive(!userActive)}> <img src={bascet} alt="hart" /></div>
                <div className={userActive ? 'userMenu active' : 'userMenu'}>
                    <div className='userMenu__content'>
                        
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  );
}

export default Navbar;
