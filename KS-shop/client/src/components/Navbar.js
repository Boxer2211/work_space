import React, { useState } from 'react';
import BurgerMenuImg from '../img/BurgerMenu.svg'
import bascet from '../img/Frame.svg';
import hart from '../img/Frame (1).svg';
import usericon from '../img/Frame (2).svg';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import {toolkitSlise} from './Redux_toolkit/toolkitSlice';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Modal from '../pages/modal/modal';

function Navbar() {
    

    const [menuActive, setMenuActive] = useState (false)
    const [userActive, setUserActive] = useState (false)
    const [favoritActive, setfavoritActive] = useState (false)
    const [bascetActive, setbascetActive] = useState (false)
    const [active, setActive] = useState(false)

    const navigate = useNavigate();

    const { RemoveFavorit, RemoveBasket, AddBasket} = toolkitSlise.actions
    const {userAuth} = useSelector(state => state.toolkit)
    const [user] = useAuthState(userAuth)

    const Login = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(userAuth, provider)
    }

    const dispatch = useDispatch()
    const {favorite, basket} = useSelector(state => state.toolkit)


    
    return (
    <div className="header">
        <div className="header__container">
            <div className="header__menu">
                <input className="header__burger" type="image" src={BurgerMenuImg} alt="Кнопка «menu»" onClick={() => setMenuActive(!menuActive)}></input>
                <div className={menuActive ? 'Menu__list active' : 'Menu__list'} onClick={() => {
                    setMenuActive(false);
                    }}>    
        
                    <div className='Menu__content' onClick={e => e.stopPropagation()}>
                        <div className='Burger__container'>
                            <p onClick={() => navigate(MAIN_ROUTE)}>Головна</p>
                            <p onClick={() => navigate(SHOP_ROUTE  + '/' + 'all')}>Католог</p>
                            <p onClick={() => navigate(CONTACTS_ROUTE)}>Про нас</p>
                            <p onClick={() => navigate(CONTACTS_ROUTE)}>Контакти</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header__nav">
                
                <p onClick={() => navigate(SHOP_ROUTE  + '/' + 'all')}>КАТАЛОГ</p>
                <p onClick={() => navigate(CONTACTS_ROUTE)}>ПРО НАС</p>
            </div>

            <div className="header__logo">
                <p onClick={() => navigate(MAIN_ROUTE)}>KSU SHOP</p>
            </div>

            <div className="header__icon">
                <div onClick={() => {
                                    setUserActive(!userActive);
                                    setfavoritActive(false)
                                    setbascetActive(false)
                                     }}><img src={usericon} alt="hart"/></div>
                <div onClick={() => {
                                    setfavoritActive(!favoritActive)
                                    setUserActive(false)
                                    setbascetActive(false)
                                    }}><img src={hart} alt="hart" /></div>
                <div onClick={() => {
                                    setbascetActive(!bascetActive)
                                    setUserActive(false)
                                    setfavoritActive(false)
                                    }}> <img src={bascet} alt="hart" /></div>
                <div className={userActive ? 'userMenu active' : 'userMenu'} onClick={() => {
                    setUserActive(false);
                    }}>    
                    <div className='userMenu__content' onClick={e => e.stopPropagation()}>
                    
                           <div className='UserMenu__notAuth'>
                           {basket.length > 0 ? (
                                <div> {basket.map((item) => 
                                    <div className='Shop__favoritePage'>
                                        <div className='Shop__itemCardImg'>
                                                <img src={item.img} alt="foto" />
                                            </div>
                                            <p>{item.name}</p>
                                            <p>{item.brand}</p>
                                            <p id='item__price'>{item.price} грн</p>
                                            <input type="button" value={'Delet'} onClick={() => dispatch(RemoveBasket(item.id))}/>
                                    </div>
                                    )}
                                    <p id='orderPrice'> Ваше замовлення на суму: {basket.reduce((a,b) => a + b.price,0)} грн</p>
                                    <input id='orderButton' type="button" value={'Підтвердити замовлення'} onClick={() => setActive(true)} /> 
                                    </div>
                                    ) 
                                    :
                                    ( <div>Тут буде ваше замовлення</div>)}
                               
                            </div>    
                       
                    </div>
                </div>
                <div className={favoritActive ? 'userMenu active' : 'userMenu'} onClick={() => {
                    setfavoritActive(false);
                    setbascetActive(false);
                    }}>  
                    <div className='userMenu__content' onClick={e => e.stopPropagation()}>
                    {favorite.length > 0 ? (
                    favorite.map((item) => 
                        <div className='Shop__favoritePage'>
                            <div className='Shop__itemCardImg'>
                                    <img src={item.img} alt="foto" />
                                </div>
                                <p>{item.name}</p>
                                <p>{item.brand}</p>
                                <p id='item__price'>{item.price} грн</p>
                                <input type="button" value={'В корзину'} onClick={() => dispatch(AddBasket(item))}/>
                                <input type="button" value={'Delet'} onClick={() => dispatch(RemoveFavorit(item.id))}/>
                        </div>
                        )) 
                        :
                        ( <div>Тут буде ваше обаране</div>)

                    }
                    
                    </div>
                </div>
                <div className={bascetActive ? 'userMenu active' : 'userMenu'} onClick={() => {
                    setbascetActive(false);
                    }}>  
                    <div className='userMenu__content' onClick={e => e.stopPropagation()}> 
                        
                        {user ? 
                        (
                            <div>
                                <div id='imgUserLogo'><img id='imgLogo' src={user.photoURL} alt=""/></div>
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
                                <input className='AuthButton' type="button" value={'Вийти'} onClick={() => userAuth.signOut()}/>
                            </div>
                        )
                        :
                        (   <div className='UserMenu__notAuth'>
                                <div> Для відображення вашого профілю потрібно авторизуватись</div>
                                <input className='AuthButton' type="button" value={'Увійти за допомогою Google'} onClick={Login}/>
                            </div>    
                        )}
                       
                        
                    </div>
                </div>
            </div>
        
        </div>
        <Modal active = {active}  setActive={setActive} />
    </div>
  );
}

export default Navbar;
