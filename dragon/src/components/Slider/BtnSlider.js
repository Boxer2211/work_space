import React from 'react';
import './Slider.css';
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'

function BtnSlider({direction, moveSlide}) {
           
    
    return (
        <button onClick={moveSlide} 
        className={direction === "next" ? 'Slide__button next' : 'Slide__button prev'}>
            <img src={direction === "next" ? rightArrow : leftArrow}></img>
        </button>
          
     
  );
}

export default BtnSlider;