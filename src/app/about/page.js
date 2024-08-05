
"use client";
import styles from "../page.module.css";
import Link from 'next/link';

import Team from "../team/page"

export default function Home() {
    const handleClick = () => {
      // alert('Button clicked!');
      const element = document.getElementById('team');
      element.scrollIntoView({ behavior: 'smooth' });

    };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.aboutdescription}>
          <div className={styles.aboutcontent}>
            <h1 className={styles.gradienttext}>Sustainable Development and Its Goals</h1>
            <p>Sustainable development is an approach to growth that meets the needs of the present
              without compromising the ability of future generations to meet their own needs. It emphasizes
              a balance between economic progress, environmental protection, and social equity. The concept
              is often linked to the United Nations’ Sustainable Development Goals (SDGs), which include
              objectives like reducing poverty, improving health and education, and promoting responsible
              consumption and production.
            </p>
            <button className={styles.button} onClick={handleClick}>Explore Our Team</button>
          </div>
          <div className={styles.aboutgraphics}>
          <img src="/graphicAbout.png" alt="about graphic"/>
          </div>
        </div>
      </div>
      <div id="team">
      <Team />

      </div>
      
    </main>
  );
}
