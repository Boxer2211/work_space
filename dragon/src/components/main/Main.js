import React, { useEffect, useState } from 'react';
import Menu from '../menu/Menu';

import './Main.css';


function Main() {
  
  return (
    <div className='Main'>
        <Menu />
        <p className='title'>DRAGON</p>
        <p className='text'>SENDING HUMANS AND CARGO INTO SPACE</p>
    </div>  
  );
}

export default Main;