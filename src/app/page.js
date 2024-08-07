import Image from "next/image";
import styles from "./page.module.css";
import Datamain from "./components/apiData.js";
import React from 'react';
import Moredata from './components/moredata.js';
import MoreeData from './components/moreeedata';
import Blog from "./blogs/page"
const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.homePage}>
          <div className={styles.centere}>

        
        <h1 className={styles.gradienttext}>News Article Blogs</h1>
        <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0',  border:'1px solid orange' }} />
        <br></br>
        </div>



      <Datamain/>   
      <Moredata/>  
      <MoreeData/>    
      {/* <div className={styles.createYourBlog}>
        <div className={styles.homeGrid}>
        <h1 className={styles.gradienttext}>Create Blogs and join our community</h1>
        <p>At Sustained Path, we believe in the power of shared knowledge and community-driven initiatives. Our blogging platform invites you to create insightful blogs on sustainable development, share your experiences, and contribute to meaningful discussions. Join our vibrant community of like-minded individuals dedicated to making a positive impact on the world. Your voice matters—start blogging with us today and be part of the change!</p>
        <button className={styles.button} >Create Blogs</button>
        </div>
        <img className={styles.imagegraphic}src="/graphicy.jpg"/>
        </div>    */}
        <div id="blogs">
          <Blog />
        </div>
      </div>
      </div>
     </main>
  );
};

export default HomePage;
