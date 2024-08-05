import styles from '../page.module.css';

const Loader = ({ isVisible }) => {
    return (
        <div className={`${styles.loaderContainer} ${!isVisible ? styles.hidden : ''}`}>
            <img className={styles.loaderimage} src='/g6-3.png'/>
            <img className={styles.loader} src='/loader.gif'/>
        </div>
    );
};

export default Loader;
