import React, { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../menu/Menu';
import './dragon.css';
import { ContextDragonInfo } from '../../App';
import Slider from '../Slider/Slider';
import starRemove from './starRemov.svg';
import starAdd from './starAdd.svg'


function Dragon() {
  
  const{dragonInfo} = useContext(ContextDragonInfo)
  const {name} = useParams();
  const dragonChouseArray = dragonInfo.filter(el => el.name === name);
  
  const nameDragon =  dragonChouseArray[0].name;
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0')
  useEffect(() => {
    if(getArray !== 0){
     setFavorites([...getArray])
    }
   }, [])
  const addFav = (props) => {
    let array = favorites;
    let addArray = true;
    array.map((item, key) => {
      if(item === nameDragon){
        array.splice(key, 1);
        addArray = false;
      }
      });
    if(addArray) {
      array.push(nameDragon);
    }
    setFavorites([...array])
    localStorage.setItem("favorites", JSON.stringify(favorites));

    let storage = localStorage.getItem('favItem' + (nameDragon) || '0')
    if(storage == null) {
      localStorage.setItem(('favItem' + (nameDragon)), JSON.stringify(nameDragon))
     }
    else {
      localStorage.removeItem('favItem' + (nameDragon));
    }
  }


  return (
    <div className='Dragon'>
      <Menu />
      <div className='Dragon__container'>
        <div className='Dragon__description Description'>
          <div className='Description__body'>
            <div className='Description__name'>
              <p>{dragonChouseArray[0].name} 
                <span className='star'>
                  
                  {favorites.includes(nameDragon) ? (
                    <img src={starRemove} alt="star" onClick={() => addFav(nameDragon)} />
                  )
                  :
                  (
                    <img src={starAdd} alt="star" onClick={() => addFav(nameDragon)} />
                  )}
                  
                
                </span>
              </p>
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
          <Slider imgages={dragonChouseArray[0].flickr_images}/>
        </div>
      </div>

    </div>  
  );
}

export default Dragon;