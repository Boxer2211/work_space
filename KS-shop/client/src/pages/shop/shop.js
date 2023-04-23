import React, { useEffect, useMemo, useState } from 'react';
import './shop.css';
import { Items } from '../../store/items';
import Footer from '../../components/Mainpage/Footer'
import { CARD_ROUTE } from '../../utils/consts';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toolkitSlise } from '../../components/Redux_toolkit/toolkitSlice';



function Shop() {
    
   const [arrCard, setArrCard] = useState(Items)
   const [title, setTitle] = useState('Всі категорії')
   const navigate = useNavigate()
    
   const params = useParams()
   const param = params.name 

   const dispatch = useDispatch()
   const {AddFavorit, RemoveFavorit,AddBasket,RemoveBasket} = toolkitSlise.actions
   const {favorite, basket} = useSelector(state => state.toolkit)

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
    function filterCategories (category, name) {
        let copy = Object.assign([], Items)
        setArrCard(copy.filter((item) => item.type === category))
        setTitle(name)
        
    }
    function filterCheckBox (brand) {
            let copy = Object.assign([], arrCard)
            setArrCard(copy.filter((item) => item.brand === brand))
        }

    useEffect(()=>{
        if (param === 'all') {
            setTitle('Всі категорії')
        } else if( param === 'jacket') {
            filterCategories(param,'Верхній одяг') 
        } else if( param === 'jeans') {
            filterCategories(param,'Джинси') 
        } else if( param === 'shoes') {
            filterCategories(param,'Взуття') 
        } else if( param === 'shirt') {
            filterCategories(param,'Футболки') 
        }
        
    }, [param])

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
                        <p onClick={() => {filterCategories('jacket','Верхній одяг');
                    }}>- Верхній одяг</p>
                        <p onClick={() => {filterCategories('jeans','Джинси');
                    }}>- Джинси</p>
                        <p onClick={() => {filterCategories('shoes','Взуття');
                    }}>- Взуття</p>
                        <p onClick={() => {filterCategories('shirt','Футболки');
                    }}>- Футболки</p>
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
                                <div className='Shop__buttonCard'  onClick={e => e.stopPropagation()}>
                                    {basket.find((elem) => elem.id == item.id) ? (
                                            <input className='ButtonActive' type="button" value={'Відмінити'} onClick={() => dispatch(RemoveBasket(item.id))} />
                                        ) 
                                        : 
                                        (
                                            <input type="button" value={'В корзину'} onClick={() => dispatch(AddBasket(item))} />
                                        )}
                                  
                                   {favorite.find((elem) => elem.id == item.id) ? (
                                            <input className='ButtonActive' type="button" value={'Обране'} onClick={() => dispatch(RemoveFavorit(item.id))} />
                                        ) 
                                        : 
                                        (
                                            <input type="button" value={'До обраного'} onClick={() => dispatch(AddFavorit(item))} />
                                        )}
                                </div>
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
