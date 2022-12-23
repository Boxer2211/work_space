import React from 'react';


function NewContact() {
  
 
 
  return (
    <div className='NewContact'>    
            <div className='NewContact__container container'>
            <div className='NewContact__head'>
                <p className='NewContact__name'>New contact</p>
            </div>
            <div className='NewContact__content'>
                <p className='NewContact__p'>Name:</p>
                <input type="text" placeholder='Enter Name' />
                <p className='NewContact__p'>Last Name:</p>
                <input type="text" placeholder='Enter Last Name' />
                <p className='NewContact__p'>Adress:</p>
                <input type="text" placeholder='Enter Adress'/>
                <p className='NewContact__p'>City:</p>
                <input type="text" placeholder='Enter City'/>
                <p className='NewContact__p'>Country:</p>
                <input type="text" placeholder='Enter Country'/>
                <p className='NewContact__p'>Email:</p>
                <input type="email" placeholder='Enter Email'/>
                <p className='NewContact__p'>Number:</p>
                <input type="number" placeholder='Enter Number'/>
                <button className='NewContact__button'>Save</button>
            </div>
        </div>          
    </div>  
  );
}

export default NewContact;