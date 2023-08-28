
import Layout from '../components/Layout';
import styles from '../styles/Index.module.css'

const Index = () => {
    return (
        <>
           <Layout>
                <div className={styles.index}>
                    <div className={styles.index__logo}>
                        <img src="./girl-and-pet.svg" alt="Logo" /> 
                    </div>
                </div>
            </Layout>
        </>
    )
};

export default Index;