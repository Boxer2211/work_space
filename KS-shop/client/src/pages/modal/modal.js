import React from 'react';
import './modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { toolkitSlise } from '../../components/Redux_toolkit/toolkitSlice';
import { useAuthState } from 'react-firebase-hooks/auth';


function Modal({active, setActive}) {
  
  const {RemoveBasket} = toolkitSlise.actions
  const {basket} = useSelector(state => state.toolkit)
  const dispatch = useDispatch()
  const {userAuth} = useSelector(state => state.toolkit)
  const [user] = useAuthState(userAuth)

    return (
      <div className={active ? 'Modal active' : 'Modal'} onClick={() => setActive(false)}>
        <div className='Modal__content' onClick={e => e.stopPropagation()}>
          <div> {basket.map((item) => 
                                      <div className='Modal__page'>
                                              <div className='Modal__itemCardImg'>
                                                  <img src={item.img} alt="foto" />
                                              </div>
                                              <div className='Modal__p'>
                                                <p>{item.name}</p>
                                                <p>{item.brand}</p>
                                                <p id='item__price'>{item.price} грн</p>
                                              </div>
                                              <input type="button" value={'Delet'} onClick={() => dispatch(RemoveBasket(item.id))}/>
                                      </div>
                                      )}
                                    <p id='orderPrice'> Ваше замовлення на суму: {basket.reduce((a,b) => a + b.price,0)} грн</p>
                                    <p>Ваше ім'я</p>
                                    <input type="text" value={user ? user.displayName : null} />
                                    <p>Ваш номер телефону</p>
                                    <input type="tel"/>
                                    <p>Вашa електрона адреса</p>
                                    <input type="email" value={user ? user.email : null}/>
                                    <p>Якщо дані вірні підтверджуйте замовлення</p>
                                    <input  id='orderButton' type="button" value={'Підтвердити замовлення'}  /> 
                                  </div>
          </div>
      </div>
  );
}

export default Modal;
