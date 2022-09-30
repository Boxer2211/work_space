import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../menu/Menu';
import './dragon.css';
import { ContextDragonInfo } from '../../App';



function Dragon() {
  
  const{dragonInfo} = useContext(ContextDragonInfo)
  const {name} = useParams();
  const dragonChouseArray = dragonInfo.filter(el => el.name === name);
  console.log(dragonChouseArray[0]);
  
  return (
    <div className='Dragon'>
      <Menu />
      <div className='Dragon__container'>
        <div className='Dragon__description Description'>
          <div className='Description__body'>
            <div className='Description__name'>
              <p>{dragonChouseArray[0].name}</p>
            </div>
            <div className='Description__table Table'>
              <div className='Table__body'>
                <div className='Table__line'>
                  <div>Name</div>
                  <div>{dragonChouseArray[0].name}</div>
                  </div>
                <div className='Table__line'>
                  <div>Description</div>
                  <div>{dragonChouseArray[0].description}</div>
                  </div>
                <div className='Table__line'>
                  <div>Wikipedia</div>
                  <div><a href={dragonChouseArray[0].wikipedia}>Read more in Wikipedia</a></div>
                  </div>
                <div className='Table__line'>
                  <div>Height with trunk</div>
                  <div>{dragonChouseArray[0].height_w_trunk.meters} meters / {dragonChouseArray[0].height_w_trunk.feet} feet </div>
                  </div>
                <div className='Table__line'>
                  <div>Dry mass</div>
                  <div>{dragonChouseArray[0].dry_mass_kg} kg / {dragonChouseArray[0].dry_mass_lb} lb</div>
                  </div>
                <div className='Table__line'>
                  <div>First_flight</div>
                  <div>{dragonChouseArray[0].first_flight}</div>
                  </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className='Dragon__slaider Slider'>
          <div className='Slider__body'>
            <img src={dragonChouseArray[0].flickr_images[0]} alt="Dragon_foto" />
          </div>
        </div>
      </div>

    </div>  
  );
}

export default Dragon;