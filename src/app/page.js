"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Datamain from './components/apiData.js';
import Moredata from './components/moredata.js';
import MoreeData from './components/moreeedata';
import BlogSession from './components/blogForm.js';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const { user, isLoading } = useUser();
  const [showBlogSession, setShowBlogSession] = useState(false);
  const router = useRouter();

  const handleCreateBlogsClick = () => {
    if (isLoading) return; // Wait for user authentication status

    if (!user) {
      router.push('/api/auth/login'); // Redirect to login if not logged in
    } else {
      setShowBlogSession(true); // Show BlogSession if logged in
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.homePage}> 
          <Datamain />   
          <Moredata />  
          <MoreeData /> 
          <div className={styles.createYourBlog}>
            <div className={styles.homeGrid}>
              <h1 className={styles.gradienttext}>Create Blogs and join our community</h1>
              <p>
                At Sustained Path, we believe in the power of shared knowledge and community-driven initiatives. 
                Our blogging platform invites you to create insightful blogs on sustainable development, share your 
                experiences, and contribute to meaningful discussions. Join our vibrant community of like-minded 
                individuals dedicated to making a positive impact on the world. Your voice matters—start blogging with 
                us today and be part of the change!
              </p>
              <button 
                className={styles.button} 
                onClick={handleCreateBlogsClick}
              >
                Create Blogs
              </button>
            </div>
            <img className={styles.imagegraphic} src="/graphicy.jpg" alt="Graphic" />
          </div>  
          {showBlogSession && <BlogSession />}
        </div>
      </div>
    </main>
  );
};

export default HomePage;