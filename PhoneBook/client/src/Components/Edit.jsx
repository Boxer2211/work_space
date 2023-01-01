import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser, putOneUser } from '../http/listApi';
import { MAIN_ROUTE } from '../utils/consts';
;


function Edit() {
  
const oneUser = useSelector(state => state.toolkit.oneUser)
const navigate =  useNavigate();
const backToHome = () => {
  navigate(MAIN_ROUTE);
}

const [name, setName] = useState(oneUser.name);
const [lastName, setLastName] = useState(oneUser.lastName);
const [adress, setAdres] = useState(oneUser.address);
const [city, setCity] = useState(oneUser.city);
const [country, setCountry] = useState(oneUser.country);
const [email, setEmail] = useState(oneUser.email);
const [number, setNumber] = useState(oneUser.number);

const addUser = () => {

  let obj = {
    _id: oneUser._id,
    name: name,
    lastName: lastName,
    address: adress,
    city: city,
    country: country,
    email: email,
    number: number
  }

  putOneUser(obj).then(data => { 
    console.log(data)     
    backToHome()
  }, 
    () => {
      alert("Fill in all the fields")
    }
  ) 
}


  return (
    <div className='NewContact'>    
            <div className='NewContact__container container'>
            <div className='NewContact__head'>
                <p className='NewContact__name'>New contact</p>
            </div>
            <div className='NewContact__content'>
                <p className='NewContact__p'>Name:</p>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Enter Name' />
                
                <p className='NewContact__p'>Last Name:</p>
                <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder='Enter Last Name' />
                
                <p className='NewContact__p'>Adress:</p>
                <input value={adress} onChange={e => setAdres(e.target.value)} type="text" placeholder='Enter Adress'/>
                
                <p className='NewContact__p'>City:</p>
                <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder='Enter City'/>
                
                <p className='NewContact__p'>Country:</p>
                <input value={country} onChange={e => setCountry(e.target.value)} type="text" placeholder='Enter Country'/>
                
                <p className='NewContact__p'>Email:</p>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Enter Email'/>
                
                <p className='NewContact__p'>Number:</p>
                <input value={number} onChange={e => setNumber(e.target.value)} type="number" placeholder='Enter Number'/>
                
                <button className='NewContact__button' onClick={addUser} >Save</button>
            </div>
        </div>          
    </div>  
  );
}

export default Edit;