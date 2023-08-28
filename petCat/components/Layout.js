import Navbar from './Navbar';
import styles from '../styles/Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.main}>
       <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;