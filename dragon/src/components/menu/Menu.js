import React, { useState } from 'react';
import './Menu.css'
import MenuList from './MenuList';




function Menu() {
  
  
  const [menuActive, setMenuActive] = useState (false)
  
  return (
    <div>
      <div className='Menu'>    
          <div className='Menu__burger'>
              <button className='Menu__button' onClick={() => setMenuActive(!menuActive)}></button>
          </div>
      </div>
      
      <MenuList active={menuActive} setActive={setMenuActive} />
    
    </div>   
     
  );
}

export default Menu;