import Image from "next/image";
import styles from "./page.module.css";
import Datamain from "./components/apiData.js";
import React from 'react';
import Moredata from './components/moredata.js';
import MoreeData from './components/moreeedata';
const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.homePage}>

      <Datamain/>   
      <Moredata/>  
      <MoreeData/>    
      </div>
      </div>
     </main>
  );
};

export default HomePage;
