import React from 'react';



function Navbar() {
  return (
    <div className='Navbar'>    
        <div className='Navbar__burger burger'>
          <button className='burger__button'></button>
        </div>
        
        <div className='Navbar__logo'>
          <button>DragonX</button>
        </div>
        
        <div className='Navbar__account account'>
          <div className='account__logo'>
           
          </div>
          <div className='account__button'>
            <button>Sign Out</button>
          </div>
        </div>
    </div>  
  );
}

export default Navbar;