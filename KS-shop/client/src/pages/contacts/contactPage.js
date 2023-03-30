import React from 'react';
import './contact.css';
import insta from "../../img/insta.svg"
import face from "../../img/facebook.jpg"
import foto1 from "../../img/fotoForContacts/IMG_4395.PNG"
import foto2 from "../../img/fotoForContacts/IMG_4396.PNG"
import foto3 from "../../img/fotoForContacts/IMG_4397.PNG"
import foto4 from "../../img/fotoForContacts/IMG_4398.PNG"
import foto5 from "../../img/fotoForContacts/IMG_4399.PNG"

function ContactPage() {
  
   
    return (
      <div className='Contact'>
        <div class="Contact__item-L"></div>
        <div className='Contact__container'>
          <div className='Contact__item Contact__item-A '>
              <p className="Footer__header">Контакти</p>
              <a href="tel:+380972399266">+380972399266</a>
              <a className="Footer__insta" href="https://instagram.com/oksana_yakivets?igshid=YmMyMTA2M2Y=">
                <img className="Footer__img" src={insta} alt="insta" />
                <a href="https://instagram.com/oksana_yakivets?igshid=YmMyMTA2M2Y="> Оксана</a>
              </a>
              <p id='ContactJoin' className="Footer__header">Приєднуйтеся до нас</p>
              <a className="Footer__insta" href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">
                <img className="Footer__img" src={insta} alt="insta" />
                <a href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">Ksu_shopp</a>
              </a>
              <a className="Footer__insta" href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">
                <img className="Footer__img" id="faceFot" src={face} alt="insta" />
                <a href="https://www.facebook.com/profile.php?id=100066732472619">Ksu_shopp</a>
              </a>
              <p>м. Дніпро, Барикадна 1а</p>
          </div>
          <div className='Contact__item Contact__item-B'>
            <iframe id='mapG' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.6725898913994!2d35.05074122922246!3d48.462389088005274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2dc5e34cb33%3A0x9006daebec35abcc!2z0LLRg9C70LjRhtGPINCR0LDRgNC40LrQsNC00L3QsCwgMSwg0JTQvdGW0L_RgNC-LCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e1!3m2!1suk!2sua!4v1679673352458!5m2!1suk!2sua" ></iframe>
          </div>
          <div className='Contact__item Contact__item-C'>
          <p className="Subscribe">
KSU.SHOPP - це байєр сервіс. У нас представлені різноманітні європейські бренди одягу, такі як Zara, Bershka, H&M, Mango, Pull&Bear, Stradivarius, Nike, Adidas та інші.
Ми працюємо як онлайн так і офлайн.</p> 
              <p className="Subscribe">В центрі міста Дніпро відкрили шоурум, маємо в наявності багато позицій. Можна прийти та приміряти все що забажаєте - це дуже зручно.</p>
              <button id="buttonOnSubscribe"><a href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">Підпишіться на наші оновлення в Інстаграм</a></button>
          </div>
          <div className='Contact__item-D'>
            <div className='Contact__Histiry'><p>З чого все починалось...</p></div>
            <div className='Contact__Footer'>
              <img src={foto1} alt="foto" />
              <img src={foto2} alt="foto" />
              <img src={foto3} alt="foto" />
              <img src={foto4} alt="foto" />
              <img src={foto5} alt="foto" />
            </div>
          </div>
        </div>
        
      </div>
  );
}

export default ContactPage;
