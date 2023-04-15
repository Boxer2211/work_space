import React, { useState } from 'react';
import './shop.css';
import { Items } from '../../store/items';
import Footer from '../../components/Mainpage/Footer'
import { CARD_ROUTE } from '../../utils/consts';
import { useNavigate } from "react-router-dom";


function Shop() {
    
   const [arrCard, setArrCard] = useState(Items)
   const [title, setTitle] = useState('Всі категорії')
   const navigate = useNavigate()

   

    function SortLow() {
        let copy = Object.assign([], arrCard);
        copy.sort((a, b) => a['price'] > b['price'] ? 1 : -1)
        setArrCard(copy)  
      }
    function SortHigh() {
        let copy = Object.assign([], arrCard);
        copy.sort((a, b) => a['price'] < b['price'] ? 1 : -1)
        setArrCard(copy) 
      }
    function filterCategories (category) {
        let copy = Object.assign([], Items)
        setArrCard(copy.filter((item) => item.type === category))
        
    }
    function filterCheckBox (brand) {
        let copy = Object.assign([], arrCard)
        setArrCard(copy.filter((item) => item.brand === brand))
    }
    
    return (
        <div className='Shop'>
            <div class="Contact__item-L"></div>
            <div className='Shop__container'>
                <div className='Shop__categoriesTitle'>
                    <h1>{title}</h1>
                </div> 

                
                <div className='Shop__leftbar'>
                    <div className='Shop__leftbarCategories'>
                        <h2>Категорії</h2>
                        <p onClick={() => {setArrCard(Items); 
                    setTitle('Всі категорії')}}>- Всі категорії</p>
                        <p onClick={() => {filterCategories('jacket');
                    setTitle('Верхній одяг')}}>- Верхній одяг</p>
                        <p onClick={() => {filterCategories('jeans');
                    setTitle('Джинси')}}>- Джинси</p>
                        <p onClick={() => {filterCategories('shoes');
                    setTitle('Взуття')}}>- Взуття</p>
                        <p onClick={() => {filterCategories('shirt');
                    setTitle('Футболки')}}>- Футболки</p>
                    </div>
                    <div className='Shop__leftbarBrands'>
                    <fieldset className='fieldset'>
                        <legend className='fieldset__legend'>Бренди</legend>
                        <div>
                        <input type="checkbox"  name="scales" className='fieldset__input' 
                        onChange={() => (filterCheckBox('ZARA'))}></input>
                        <label for="scales">Zara</label>
                        </div>
                        <div>
                        <input type="checkbox"  name="horns" className='fieldset__input' 
                         onChange={() => filterCheckBox('H&M')}></input>
                        <label for="horns">H & M</label>
                        </div>
                        <div>
                        <input type="checkbox"  name="scales" className='fieldset__input' 
                         onChange={() => filterCheckBox('Mango')}></input>
                        <label for="scales">Mango</label>
                        </div>
                        <div>
                        <input type="checkbox"  name="horns" className='fieldset__input' 
                         onChange={() => filterCheckBox('Adidas')}></input>
                        <label for="horns">Adidas</label>
                        </div>
                        <button className='fieldset__button'>Застосувати</button>
                    </fieldset>
                    </div>
                </div>

                <div className='Shop__rightbar'> 
                    <div className='Shop__sort'>
                        <p>Сортувати:</p>
                        <button onClick={() => SortHigh()}>Спочатку дорогі</button>
                        <button onClick={() => SortLow()}>Спочатку дешеві</button>
                    </div>
                    <div className='Shop__bar'>
                        {arrCard.length > 0 ? arrCard.map((item) => 
                            <div className='Shop__itemCard' key={item.id} onClick={() => navigate(CARD_ROUTE + '/' + item.id)} >
                                <div className='Shop__itemCardImg'>
                                    <img src={item.img} alt="foto" />
                                </div>
                                <p>{item.name}</p>
                                <p>{item.brand}</p>
                                <p id='item__price'>{item.price} грн</p>
                            </div>                     
                            )
                            : <div className='Shop__nonThing'>Товар не знайдено. Оберіть іншу категорію або бренд.</div>
                            }
                    </div> 
                </div>
               

            </div>
            <div class="Contact__item-L"></div>
            <Footer />
        </div>
        
    );
}

export default Shop;
