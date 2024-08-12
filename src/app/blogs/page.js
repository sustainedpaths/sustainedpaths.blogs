"use client";

// import styles from "../page.module.css";
// import { useEffect, useState } from 'react';
// import { database, ref, set, onValue } from '../api/db/firebase';

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//      <h1>Welcome to blog</h1>
//       </div>
//     </main>
//   );
// }


// export default function Home() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const dataRef = ref(database, 'users');

//     // Read data from Firebase
//     onValue(dataRef, (snapshot) => {
//       const data = snapshot.val();
//       setData(data);
//     });

//     // Optionally, write data to Firebase
//     // set(ref(database, 'path/to/data'), { key: 'value' });

//     // Cleanup
//     // return () => dataRef.off();
//   }, []);

//   return (
//     <div>
//       <h1>Firebase Realtime Database with Next.js</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

import styles from "../page.module.css";
import { useEffect, useState } from 'react';
import { database, ref, onValue } from '../api/db/firebase';
import Styles from "../components/apiData.module.css";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [mount, setMount] = useState(0);

  useEffect(() => {
    const mounted = () => {
      console.log("Mounted")
    }
    if(mount){
      return mounted();
    }
    setMount(1);
    const blogsRef = ref(database, 'Blogs');
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      const keys = Object.keys(data);
    //   keys.forEach(key => {
    //     const blogPost = data[key];
    //     console.log(`Title: ${blogPost.Title}`);
    //     console.log(`Description: ${blogPost.Description}`);
    //     console.log(`Date: ${blogPost.Date}`);
    //     console.log(`Author: ${blogPost.AuthorName}`);
    //     console.log(`Vote: ${blogPost.Vote}`);
    //     console.log('---');
    //     console.log('---');
    // })

    const fetchedBlogs = keys.map(key => data[key]);
    setBlogs(fetchedBlogs); 
});

 
    
  });
  const handleClick = () => {
    alert('work in progress!');
  };
     
  return (

    <main className={styles.main3}>
      <div className={styles.description}>
      <div className={styles.createYourBlog}>
        <div className={styles.homeGrid}>
        <h1 className={styles.gradienttext}>Create Blogs and join our community</h1>
        <p>At Sustained Path, we believe in the power of shared knowledge and community-driven initiatives. Our blogging platform invites you to create insightful blogs on sustainable development, share your experiences, and contribute to meaningful discussions. Join our vibrant community of like-minded individuals dedicated to making a positive impact on the world. Your voice matters—start blogging with us today and be part of the change!</p>
        <button className={styles.button} onClick={handleClick} >Create Blogs</button>
        </div>
        <img className={styles.imagegraphic}src="/graphicy.jpg"/>
        </div> 
      </div>
      {/* <div id ="blogposst">
      
             {blogs.length === 0 ? (
                <div>Loading...</div>
            ) : ( 
                <div className={Styles.container} >
                    {blogs.map((blogPost, index) => (
                        <a key={index} href="sustainedpaths.blog" target="_blank" rel="noopener noreferrer" className={Styles.articlecard}>
                            <h4>{blogPost.Title}</h4>
                            <p>{blogPost.Date}</p>
                            <p>{blogPost.AuthorName}</p>
                        </a>
                    ))}
                </div>
             )} 
        </div> */}
        <div>

        {/* {blogs.map((blogPost, index) => (
        <div key={index}>
          <h2>{blogPost.Title}</h2>
          <p>{blogPost.Description}</p>
          <p><strong>Date:</strong> {blogPost.Date}</p>
          <p><strong>Author:</strong> {blogPost.AuthorName}</p>
          <p><strong>Vote:</strong> {blogPost.Vote}</p>
          <hr />
        </div>
      ))}; */}
    </div>
    </main>
    
  );
}
