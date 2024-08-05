'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../page.module.css';
import Loader from '../components/loader'; // Ensure correct import path

export default function Home() {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        // Set a timeout to hide the loader after 2 seconds
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading && containerRef.current) {
            const container = containerRef.current;
            let scrollAmount = 0;
            const cardWidth = 300; // width of a single card
            const scrollStep = cardWidth + 10; // card width + gap

            function autoScroll() {
                scrollAmount += scrollStep;
                if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0;
                }
                container.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }

            const intervalId = setInterval(autoScroll, 4000); // adjust interval as needed

            return () => clearInterval(intervalId);
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loader isVisible={loading} />
            ) : (
                <main className={styles.main}>
                    <div className={styles.description}>
                        <div className={styles.ourteam}>
                            <h1 className={styles.gradienttext}>Meet Our Awesome Team</h1>
                
                           
                            <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0',  border:'1px solid orange' }} />
                             <br></br>


                            <div className={styles.flexme}>

                            
                            <div className={styles.cardsContainer} ref={containerRef}>
                                <div className={styles.cardcomp}>
                                    <div className={styles.imageContainer}>
                                        <h3>Manjeet Singh</h3>
                                        <img src='/manjeet.jpg' alt='Manjeet pic' />
                                    </div>
                                    <div className={styles.cardcontent}>
                                        <div className={styles.tags}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>React</span>
                                            <span>Next</span>
                                            <span>GitHub</span>
                                            <span>MongoDB</span>
                                            <span>Express</span>
                                            <span>Front End Developer</span>
                                        </div>
                                        <i className={styles.quotes}>"I can do this whole day"</i>
                                    </div>
                                    <div className={styles.socialsCard}>
                                        <a className={styles.githubBackground} href='#'><img src='/github.png' alt='Manjeet github' /></a>
                                        <a className={styles.linkedinBackground} href='#'><img src='/linkedin.png' alt='Manjeet linkedin' /></a>
                                        <a className={styles.codepenBackground} href='#'><img src='/codepen.png' alt='Manjeet codepen' /></a>
                                    </div>
                                </div>
                                <div className={styles.cardcomp}>
                                    <div className={styles.imageContainer}>
                                        <h3>archi tanwar</h3>
                                        <img src='/archi.jpg' alt='archi pic' />
                                    </div>
                                    <div className={styles.cardcontent}>
                                        <div className={styles.tags}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>React</span>
                                            <span>Next</span>
                                            <span>GitHub</span>
                                            <span>MongoDB</span>
                                            <span>Express</span>
                                            <span>Front End Developer</span>
                                        </div>
                                        <i className={styles.quotes}>"Sweet but Pshycho"</i>
                                    </div>
                                    <div className={styles.socialsCard}>
                                        <a className={styles.githubBackground} href='#'><img src='/github.png' alt='archi github' /></a>
                                        <a className={styles.linkedinBackground} href='#'><img src='/linkedin.png' alt='archi linkedin' /></a>
                                        <a className={styles.codepenBackground} href='#'><img src='/codepen.png' alt='archi codepen' /></a>
                                    </div>
                                </div>
                                <div className={styles.cardcomp}>
                                    <div className={styles.imageContainer}>
                                        <h3>Riya Goyal</h3>
                                        <img src='/riya.jpg' alt='riya pic' />
                                    </div>
                                    <div className={styles.cardcontent}>
                                        <div className={styles.tags}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>React</span>
                                            <span>Wordpress</span>
                                            <span>magic</span>
                                            <span>chota bheem</span>
                                            <span>Front End Developer</span>
                                        </div>
                                        <i className={styles.quotes}>"Chim tamak tum tum"</i>
                                    </div>
                                    <div className={styles.socialsCard}>
                                        <a className={styles.githubBackground} href='#'><img src='/github.png' alt='riya github' /></a>
                                        <a className={styles.linkedinBackground} href='#'><img src='/linkedin.png' alt='riya linkedin' /></a>
                                        <a className={styles.codepenBackground} href='#'><img src='/codepen.png' alt='riya codepen' /></a>
                                    </div>
                                </div>
                                <div className={styles.cardcomp}>
                                    <div className={styles.imageContainer}>
                                        <h3>Agrim Kulshreshtha</h3>
                                        <img src='/agrim.jpg' alt='agrim pic' />
                                    </div>
                                    <div className={styles.cardcontent}>
                                        <div className={styles.tags}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Next</span>
                                            <span>SQL</span>
                                            <span>API integration</span>
                                            <span>Communication</span>
                                            <span>Developer</span>
                                        </div>
                                        <i className={styles.quotes}>"I am Batman"</i>
                                    </div>
                                    <div className={styles.socialsCard}>
                                        <a className={styles.githubBackground} href='#'><img src='/github.png' alt='agrim github' /></a>
                                        <a className={styles.linkedinBackground} href='#'><img src='/linkedin.png' alt='agrim linkedin' /></a>
                                        <a className={styles.codepenBackground} href='#'><img src='/codepen.png' alt='agrim codepen' /></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}
