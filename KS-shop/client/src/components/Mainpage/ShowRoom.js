import React from "react";
import './Main.css';
import slide1 from "../../img/slide1.jpg"
import slide2 from "../../img/slide2.jpg"
import slide3 from "../../img/slide3.jpg"
import slide4 from "../../img/slide4.jpg"

function ShowRoom() {
  
  
  
  return (
    <div className="ShowRoom">
        <div className="ShowRoom__container">
            <div className="ShowRoom__subscribe">
              <p id="HeadSubscribe">ПРО НАШ МАГАЗИН</p> 
              <p id="adres">м. Дніпро, вул. Барикадна, 1</p>
              <p className="Subscribe">
KSU.SHOPP - це байєр сервіс. У нас представлені різноманітні європейські бренди одягу, такі як Zara, Bershka, H&M, Mango, Pull&Bear, Stradivarius, Nike, Adidas та інші.
Ми працюємо як онлайн так і офлайн.</p> 
              <p className="Subscribe">В центрі міста Дніпро відкрили шоурум, маємо в наявності багато позицій. Можна прийти та приміряти все що забажаєте - це дуже зручно.</p>
              <button id="buttonOnSubscribe"><a href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">Підпишіться на наші оновлення в Інстаграм</a></button>

            </div>
            <div class="container_slider_css">
                <img class="photo_slider_css" src={slide1} alt=""></img>
                <img class="photo_slider_css" src={slide2} alt=""></img>
                <img class="photo_slider_css" src={slide3} alt=""></img>
                <img class="photo_slider_css" src={slide4} alt=""></img>
            </div>
        </div>
    </div>
  );
}

export default ShowRoom;
