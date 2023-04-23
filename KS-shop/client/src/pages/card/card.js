
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Mainpage/Footer';
import { Items } from '../../store/items';
import './card.css';
import { SHOP_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { toolkitSlise } from '../../components/Redux_toolkit/toolkitSlice';




function Card() {
    
    const navigate = useNavigate()
    const {id} = useParams()    
    let item = Items.filter((elem) => elem.id === +id);
    item = item[0]
    const dispatch = useDispatch()
    const {AddFavorit, RemoveFavorit,AddBasket,RemoveBasket} = toolkitSlise.actions
    const {favorite, basket} = useSelector(state => state.toolkit)

    return (
       <div className='Card'>
            <div class="Contact__item-L"></div>
                <div className='Card__container'>
                    <button onClick={() => navigate(SHOP_ROUTE  + '/' + 'all')}>Назад до каталогу</button>
                    <div className='Card__item'>
                        <div className='Card__foto'>
                            <img src={item.img} alt="item" />
                        </div>
                        <div className='Card__description'>
                            <h2>{item.name}</h2>
                            <p>{item.brand}</p>
                            <p>{item.price}</p>
                            <p>Розмір:</p>
                            {basket.find((elem) => elem.id == +id) ? (
                                <input className='ButtonActive' type="button" value={'Видалити з корзини'} onClick={() => dispatch(RemoveBasket(item.id))} />
                            ) 
                            : 
                            (
                                <input type="button" value={'В корзину'} onClick={() => dispatch(AddBasket(item))} />
                            )}
                    
                            {favorite.find((elem) => elem.id == +id) ? (
                                <input className='ButtonActive' type="button" value={'Обране'} onClick={() => dispatch(RemoveFavorit(item.id))} />
                            ) 
                            : 
                            (
                                <input type="button" value={'До обраного'} onClick={() => dispatch(AddFavorit(item))} />
                            )}
                            
                        </div>
                    </div>
                </div>               
            <div class="Contact__item-L"></div>
            <Footer />
        </div>
    );
}

export default Card;
