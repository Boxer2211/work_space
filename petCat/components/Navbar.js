import Head from "next/head";
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <Head>
                <meta keywords="users, users list"></meta> //мета теги, ключевый слова {/* тут вписати мета теги*/}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
                <title>Main page</title>
            </Head>
            <div className={styles.navbar}>
                    <div className={styles.navbar__siteLogo}>
                        <Link href="/"> <img src="./Logo.svg" alt="Logo" /> </Link>
                    </div>
               <div className={styles.navbar__greetings}>
                <p> Hi! 👋</p>
                <p className={styles.greetings__p}>Welcome to MacPaw Bootcamp 2023</p>
               </div>
               <div className={styles.navbar__menu}>
                    <p>Lets start using The Cat API</p>
                    <div className={styles.menu__items}>
                        <Link href="/voting">
                            <div className={styles.menu__item}>
                                <div className={styles.item__logoVOTING}>
                                    <img src="./vote-table.svg" alt="Logo" />
                                </div>
                                <input className={styles.item__button} type="button" value="VOTING" />
                            </div>
                        </Link>
                        <Link href="/breeds">
                            <div className={styles.menu__item}>
                                <div className={styles.item__logoBREEDS}>
                                    <img src="./pet-breeds.svg" alt="Logo" />
                                </div>
                                <input className={styles.item__button} type="button" value="BREEDS" />
                            </div>
                        </Link>
                        <Link href="/gallery">
                            <div className={styles.menu__item}>
                                <div className={styles.item__logoGALLERY}>
                                    <img src="./images-search.svg" alt="Logo" />
                                </div>
                                <input className={styles.item__button} type="button" value="GALLERY" />
                            </div>
                        </Link>
                    </div>
               </div>
            </div>
           
        </>
    )
}

export default Navbar;