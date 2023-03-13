import React from "react";
import BurgerMenu from '../img/BurgerMenu.svg';
import bascet from '../img/Frame.svg';
import hart from '../img/Frame (1).svg';
import usericon from '../img/Frame (2).svg';

function Navbar() {
  return (
    <div className="header">
        <div className="header__container">
            <div className="header__menu">
                <input className="header__burger" type="image" src={BurgerMenu} alt="Кнопка «menu»"></input>
                

            </div>
            
            <div className="header__nav">
                <p>NEW</p>
                <p>КАТАЛОГ</p>
                <p>ПРО NAS </p>
            </div>

            <div className="header__logo">
                <p>KSU SHOP</p>
            </div>

            <div className="header__icon">
                <img src={usericon} alt="hart" />
                <img src={hart} alt="hart" />
                <img src={bascet} alt="hart" />
            </div>
        
        </div>
    </div>
  );
}

export default Navbar;
