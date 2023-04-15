
import Footer from '../../components/Mainpage/Footer';
import './delivery.css';
import post from '../../img/NovaPost.png'
import car from '../../img/car.png'



function Delivery() {
  
    return (
       <div className='delivery'>
            <div class="Contact__item-L"></div>
                <div className='delivery__description'>
                    <h1>Доставка та оплата</h1>
                    <p>Замовлення в інтернет-магазині обробляються:
пн-пт з 10 до 19;
сб-нд з 11 до 17.
Після оформлення замовлення та оплати на сайті, ми перевіряємо наявність товару на нашому онлайн складі чи у обраній вами точці самовивозу.

Після формування замовлення ви отримаєте повідомлення у месенджер (Viber/Telegram/WhataApp), СМС чи на вашу пошту з підтвердженням замовлення.

Якщо якогось товару немає в наявності, менеджер запропонує вам інший варіант товару чи спосіб доставки, або поверне кошти.

                        Термін відправки з моменту підтвердження замовлення 1-4 дні.</p>
                </div>
                <div className='delivery__variable'>
                    <div className='delivery__novapost'>
                        <img className='delivery__img' src={post} alt="post" />
                        <h2>Нова Пошта</h2>
                        <p>Доставку Новою Поштою здійснюємо протягом 1-4 днів з моменту підтвердження замовлення</p>
                    </div>
                    <div className='delivery__samoviv'>
                        <img className='delivery__img' src={car} alt="car" />
                        <h2>Самовивіз</h2>
                        <p>м. Дніпро</p>
                        <p>вул. Барикадна 1а</p>
                        <p>Графік роботи:</p>
                        <p>Пн-Пт 13:00-18:00</p>
                        <p>Сб-Нд 12:00-18:00</p>
                    </div>
                </div>
            
            <div class="Contact__item-L"></div>
            <Footer />
        </div>
    );
}

export default Delivery;
