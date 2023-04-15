
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Mainpage/Footer';
import { Items } from '../../store/items';
import './card.css';
import { SHOP_ROUTE } from '../../utils/consts';




function Card() {
    
    const navigate = useNavigate()
    const {id} = useParams()    
    let item = Items.filter((elem) => elem.id === +id);
    item = item[0]
    

    return (
       <div className='Card'>
            <div class="Contact__item-L"></div>
                <div className='Card__container'>
                    <button onClick={() => navigate(SHOP_ROUTE)}>Назад до каталогу</button>
                    <div className='Card__item'>
                        <div className='Card__foto'>
                            <img src={item.img} alt="item" />
                        </div>
                        <div className='Card__description'>
                            <h2>{item.name}</h2>
                            <p>{item.brand}</p>
                            <p>{item.price}</p>
                            <p>Розмір:</p>
                            <input type="button" value={'В корзину'} />
                            <input type="button" value={'До обраного'} />
                        </div>
                    </div>
                </div>               
            <div class="Contact__item-L"></div>
            <Footer />
        </div>
    );
}

export default Card;
