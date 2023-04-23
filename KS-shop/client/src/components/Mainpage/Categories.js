import React from "react";
import './Main.css';
import fut from "../../img/fut.JPG"
import djeans from "../../img/djins.JPG"
import jackets from "../../img/jaket.JPG"
import shoes from "../../img/shoes.JPG"
import { SHOP_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";




function Categories() {
  
  const navigate = useNavigate()

  return (
    <div className="Categories">
        <div className="Categories__container" >
            <div className="Categories__items" onClick={() => navigate(SHOP_ROUTE  + '/' + 'jacket')}>
                <img src={jackets} alt="img" />
                <div className="Categories__bottom">
                  <p>Верхній одяг</p>
                </div>
            </div>
            <div className="Categories__items" onClick={() => navigate(SHOP_ROUTE  + '/' + 'jeans')}>
                <img src={djeans} alt="img" />
                <div className="Categories__bottom">
                  <p>Джинси</p>
                </div>
            </div>
            <div className="Categories__items" onClick={() => navigate(SHOP_ROUTE  + '/' + 'shoes')}>
                 <img src={shoes} alt="img" />
                 <div className="Categories__bottom">
                  <p>Взуття</p>
                </div>    
            </div>
            <div className="Categories__items" onClick={() => navigate(SHOP_ROUTE  + '/' + 'shirt')}>
                 <img src={fut} alt="img" />
                 <div className="Categories__bottom">
                    <p>Футболки</p>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Categories;
