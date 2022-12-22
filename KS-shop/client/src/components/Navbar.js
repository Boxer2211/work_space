import React from "react";


function Navbar() {
  return (
    <div className="header">
        <div className="header__container">
            <div clasneme="header__menu">
                <button className="header__burger"></button>
            </div>
            
            <div className="header__nav">
                <p>NEW</p>
                <p>КАТАЛОГ</p>
                <p>ПРО НАС</p>
            </div>

            <div className="header__logo">
                <p>KS SHOP</p>
            </div>
            <div className="header__icon">
                ICon
            </div>
        
        </div>
    </div>
  );
}

export default Navbar;
