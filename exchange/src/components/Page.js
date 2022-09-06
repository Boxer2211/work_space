import React, { useState } from 'react';
import Main from './Main';
import Chas from './Tine';

function Page() {
   
      const [state, setState] = useState({USD: " ",
                                          EURO: " ",
                                          time: 1});      
               
      
                                          
      async function getCurency () {
      const api_url = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
                                  
                                  //{method: 'GET', // *GET, POST, PUT, DELETE, etc.
                                  // mode: 'no-cors', // no-cors, *cors, same-origin
                                  // referrerPolicy: 'no-referrer'  
                                 // }
                                  );
      const data = await api_url.json()
      setState({USD: data[0].buy,
                EURO: data[1].buy,
                time: 2 })
            
      }
      if (state.time === 1) {
        getCurency()
      }
    

  return (
    <div className="Page">
        <div className='header'>
          <div className='header__content'>
              <h1>Курс Приват Банк на {Chas}</h1>
              <p>USD = {Number(state.USD).toFixed(2)} UAH</p>
              <p>EUR = {Number(state.EURO).toFixed(2)} UAH</p>
          </div>
        </div>
      <Main state={state}/>
    </div>
    
  )
}

export default Page;
