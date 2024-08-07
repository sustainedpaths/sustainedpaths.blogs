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

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <div className={styles.createYourBlog}>
        <div className={styles.homeGrid}>
        <h1 className={styles.gradienttext}>Create Blogs and join our community</h1>
        <p>At Sustained Path, we believe in the power of shared knowledge and community-driven initiatives. Our blogging platform invites you to create insightful blogs on sustainable development, share your experiences, and contribute to meaningful discussions. Join our vibrant community of like-minded individuals dedicated to making a positive impact on the world. Your voice matters—start blogging with us today and be part of the change!</p>
        <button className={styles.button} >Create Blogs</button>
        </div>
        <img className={styles.imagegraphic}src="/graphicy.jpg"/>
        </div> 
      </div>
    </main>
  );
}
