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
            <div className='Description__table'>
              <table>
                <tbody>
                <tr>
                  <td>Name</td>
                  <td>{dragonChouseArray[0].name}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{dragonChouseArray[0].description}</td>
                </tr>
                <tr>
                  <td>Wikipedia</td>
                  <td>{dragonChouseArray[0].wikipedia}</td>
                </tr>
                <tr>
                  <td>Height with trunk</td>
                  <td>{dragonChouseArray[0].height_w_trunk.meters} meters / {dragonChouseArray[0].height_w_trunk.feet} feet </td>
                </tr>
                <tr>
                  <td>Dry mass</td>
                  <td>{dragonChouseArray[0].dry_mass_kg} kg / {dragonChouseArray[0].dry_mass_lb} lb</td>
                </tr>
                <tr>
                  <td>First_flight</td>
                  <td>{dragonChouseArray[0].first_flight}</td>
                </tr>
                </tbody>
              </table>
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