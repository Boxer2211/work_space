import React from "react";
import './Main.css';
import insta from "../../img/insta.svg"
import face from "../../img/facebook.jpg"


function Footer() {
  return (
    <div className="Footer">
        <div className="Footer__container">
            <div className="Footer__items">
              <p className="Footer__header">Контакти</p>
              <a href="tel:+380972399266">+380972399266</a>
              <a className="Footer__insta" href="https://instagram.com/oksana_yakivets?igshid=YmMyMTA2M2Y=">
                <img className="Footer__img" src={insta} alt="insta" />
                <a href="https://instagram.com/oksana_yakivets?igshid=YmMyMTA2M2Y="> Оксана</a>
              </a>
              <p>м. Дніпро, Барикадна 1а</p>
            </div>
            <div className="Footer__items Footer__items-center">
              <p className="Footer__header">Деталі</p>
              <a href="#">Про нас</a>
              <a href="#">Доставка та оплата</a>
              <a href="#">Умови використання сайту</a>
            </div>
            <div className="Footer__items" >
              <p className="Footer__header">Приєднуйтеся до нас</p>
              <a className="Footer__insta" href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">
                <img className="Footer__img" src={insta} alt="insta" />
                <a href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">Ksu_shopp</a>
              </a>
              <a className="Footer__insta" href="https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y=">
                <img className="Footer__img" id="faceFot" src={face} alt="insta" />
                <a href="https://www.facebook.com/profile.php?id=100066732472619">Ksu_shopp</a>
              </a>
            </div>
        </div>
    </div>
  );
}

export default Footer;
