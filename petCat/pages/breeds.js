import Layout from '../components/Layout';
import styles from '../styles/Breeds.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_B1fPWFfp0kR3v0dDD8GuLQXQBLBKBr1Zd9U2dKYJbXBZo8522JLOAZpq1Ml0Zl3M';

const Breeds = () => {
    
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      // Отримання списку порід при завантаженні компонента
      axios.get('/breeds')
        .then(response => {
          setBreeds(response.data);
        })
        .catch(error => {
          console.error('Помилка отримання порід:', error);
        });
    }, []);
  
    useEffect(() => {
      if (selectedBreed) {
        // Отримання зображень для вибраної породи
        axios.get(`/images/search?breed_ids=${selectedBreed}&limit=5`)
          .then(response => {
            setImages(response.data);
          })
          .catch(error => {
            console.error('Помилка отримання зображень:', error);
          });
      }
    }, [selectedBreed]);
  
    const handleBreedChange = (e) => {
      setSelectedBreed(e.target.value);
    };

    return (
        <>
            <Layout>
                <div className={styles.breeds}>
                    
                    <div className={styles.header}>
                        <div className={styles.header__search}>
                            <input type="text" placeholder='Search for breeds by name'/> 
                            <img src="/Group26.svg" alt="Search" /> 
                        </div>
                        <div className={styles.header__items}>
                            <div className={styles.header__item}>
                                <img src="/Smile.svg" alt="smile" />
                            </div>
                            <div className={styles.header__item}>
                                <img src="/Heart.svg" alt="smile" />
                            </div>
                            <div className={styles.header__item}>
                                <img src="/DisSmile.svg" alt="smile" />
                            </div>
                        </div>
                    </div>


                    <select value={selectedBreed} onChange={handleBreedChange}>
                        <option value="">Оберіть породу</option>
                        {breeds.map((breed) => (
                        <option key={breed.id} value={breed.id}>
                            {breed.name}
                        </option>
                        ))}
                    </select>

                    <div>
                        {images.map((image) => (
                        <img
                            key={image.id}
                            className="cat-image"
                            alt=""
                            src={image.url}
                        ></img>
                        ))}
                    </div>
                </div> 
            </Layout>
        </>
    )
};

export default Breeds;