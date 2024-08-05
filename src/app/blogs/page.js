"use client";

import styles from "../page.module.css";
import { useEffect, useState } from 'react';
import { database, ref, set, onValue } from '../api/db/firebase';

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//      <h1>Welcome to blog</h1>
//       </div>
//     </main>
//   );
// }


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, 'users');

    // Read data from Firebase
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });

    // Optionally, write data to Firebase
    // set(ref(database, 'path/to/data'), { key: 'value' });

    // Cleanup
    // return () => dataRef.off();
  }, []);

  return (
    <div>
      <h1>Firebase Realtime Database with Next.js</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
