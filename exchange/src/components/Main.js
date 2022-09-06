import React, { useState } from 'react';



function Main(props) {

    const usd = props.state.USD
    const eur = props.state.EURO
    let [value1, setValue1] = useState(1)
    let value2 
    let [sel1, setSel1] = useState(" ")
    let [sel2, setSel2] = useState(" ")  
   
    if(sel1 === "USD" && sel2 === "UAH2") {
        value2 = value1 * usd
    } else if (sel1 === "USD" && sel2 === "EUR2") {
        value2 = value1 / 1
    } else if (sel1 === "USD" && sel2 === "USD2") {
        value2 = "Выберите другую валюту"
    } else if (sel1 === "UAH" && sel2 === "USD2") {
        value2 = (value1 / usd).toFixed(2)
    } else if (sel1 === "UAH" && sel2 === "EUR2") {
        value2 = (value1 / eur).toFixed(2)
    } else if (sel1 === "UAH" && sel2 === "UAH2") {
        value2 = "Выберите другую валюту"
    }else if (sel1 === "EUR" && sel2 === "UAH2") {
        value2 = value1 * eur
    } else if (sel1 === "EUR" && sel2 === "USD2") {
        value2 = value1 * 1
    } else if (sel1 === "EUR" && sel2 === "EUR2") {
        value2 = "Выберите другую валюту"
    }

    
    return (
    <div className='main'>
        <div className='main__content'>
            <h1>EXCHANGE CALCULATOR</h1>
            <div className='main__inputs'>
                <select onChange={e => setSel1(e.target.value)} >
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="EUR">EUR</option>
                </select>
            <input 
                        type="number" 
                        value={value1} 
                        onChange={e => setValue1(e.target.value)} />
            </div>
            <div className='main__inputs'>    
                <select onChange={e => setSel2(e.target.value)}>
                    <option value="USD2">USD</option>
                    <option value="UAH2">UAH</option>
                    <option value="EUR2">EUR</option>
                </select>
                <input type="text" value={value2} 
                       />
            </div>
        </div>
    </div>
  )
    
  
}

export default Main;
