import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import './Slider.css';


function Slider(props) {
           
    const [slideIndex, setSlideIndex] = useState(1);
    
    const nextSlide = () => {
        if(slideIndex !== props.imgages.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === props.imgages.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(props.imgages.length)
        }
    }

    return (
    <div className='Slider'>    
                {props.imgages.map((img, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? 'Slider__container active-anim' : 'Slider__container'} >
                        <img key={img} src={img}></img>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        
    </div>
          
     
  );
}

export default Slider;