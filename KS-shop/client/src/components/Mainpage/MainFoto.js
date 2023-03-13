import React from "react";
import './Main.css';
import img1 from "../../img/IMG_1.JPG"
import img2 from "../../img/IMG_2.JPG"
import img3 from "../../img/IMG_3.JPG"

function MainFoto() {
  return (
    <div className="Foto__container">
        <div className="Foto__items">
            <img className="img" src={img1} alt="img1" />
        </div>
        <div className="Foto__items" id="foto2">
            <img className="img" src={img2} alt="img2" />
        </div>
        <div className="Foto__items" id="foto3">
            <img className="img" src={img3} alt="img3" />
        </div>
    </div>
  );
}

export default MainFoto;
