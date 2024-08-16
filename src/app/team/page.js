'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../page.module.css';
import Loader from '../components/loader'; // Ensure correct import path

export default function Team() {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);
    const intervalRef = useRef(null); // Store the interval ID
    const isDragging = useRef(false); // Track dragging state
    const startPos = useRef(0); // Track the initial position on mouse down
    const scrollLeft = useRef(0); // Track the scroll position on mouse down

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

            intervalRef.current = setInterval(autoScroll, 4000); // start auto-scroll

            // Pause auto-scroll on user interaction
            const pauseAutoScroll = () => clearInterval(intervalRef.current);
            const resumeAutoScroll = () => {
                clearInterval(intervalRef.current);
                intervalRef.current = setInterval(autoScroll, 4000);
            };

            // Mouse down event to start dragging
            const onMouseDown = (e) => {
                pauseAutoScroll();
                isDragging.current = true;
                startPos.current = e.pageX - container.offsetLeft;
                scrollLeft.current = container.scrollLeft;
            };

            // Mouse leave event to stop dragging
            const onMouseLeave = () => {
                isDragging.current = false;
                resumeAutoScroll();
            };

            // Mouse up event to stop dragging
            const onMouseUp = () => {
                isDragging.current = false;
                resumeAutoScroll();
            };

            // Mouse move event to handle dragging
            const onMouseMove = (e) => {
                if (!isDragging.current) return;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startPos.current) * 2; // Increase scroll speed if needed
                container.scrollLeft = scrollLeft.current - walk;
            };

            // Touch event handlers for mobile devices
            const onTouchStart = (e) => {
                pauseAutoScroll();
                isDragging.current = true;
                startPos.current = e.touches[0].pageX - container.offsetLeft;
                scrollLeft.current = container.scrollLeft;
            };

            const onTouchMove = (e) => {
                if (!isDragging.current) return;
                e.preventDefault();
                const x = e.touches[0].pageX - container.offsetLeft;
                const walk = (x - startPos.current) * 2;
                container.scrollLeft = scrollLeft.current - walk;
            };

            const onTouchEnd = () => {
                isDragging.current = false;
                resumeAutoScroll();
            };

            // Add event listeners for dragging
            container.addEventListener('mousedown', onMouseDown);
            container.addEventListener('mouseleave', onMouseLeave);
            container.addEventListener('mouseup', onMouseUp);
            container.addEventListener('mousemove', onMouseMove);
            container.addEventListener('touchstart', onTouchStart);
            container.addEventListener('touchmove', onTouchMove);
            container.addEventListener('touchend', onTouchEnd);

            return () => {
                clearInterval(intervalRef.current);
                container.removeEventListener('mousedown', onMouseDown);
                container.removeEventListener('mouseleave', onMouseLeave);
                container.removeEventListener('mouseup', onMouseUp);
                container.removeEventListener('mousemove', onMouseMove);
                container.removeEventListener('touchstart', onTouchStart);
                container.removeEventListener('touchmove', onTouchMove);
                container.removeEventListener('touchend', onTouchEnd);
            };
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loader isVisible={loading} />
            ) : (
                <main className={styles.main2}>
                    <div className={styles.description}>
                        <div className={styles.ourteam}>
                            <h1 className={styles.gradienttext}>Meet Our Awesome Team</h1>
                            <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0',  border:'1px solid orange' }} />
                            <br />
                            <div className={styles.flexme}>
                                <div className={styles.cardsContainer} ref={containerRef}>
                                    {/* Team member cards */}
                                    {/* Manjeet Singh */}
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
                                            <i className={styles.quotes}>&quot; I can do this whole day &quot;</i>
                                        </div>
                                        <div className={styles.socialsCard}>
                                            <a className={styles.githubBackground} href='#'><img src='/github.png' alt='Manjeet github' /></a>
                                            <a className={styles.linkedinBackground} href='#'><img src='/linkedin.png' alt='Manjeet linkedin' /></a>
                                            <a className={styles.codepenBackground} href='#'><img src='/codepen.png' alt='Manjeet codepen' /></a>
                                        </div>
                                    </div>
                                    {/* Archi Tanwar */}
                                    <div className={styles.cardcomp}>
                                        <div className={styles.imageContainer}>
                                            <h3>Archi Tanwar</h3>
                                            <img src='/archi.jpg' alt='Archi pic' />
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
                                            <i className={styles.quotes}>&quot; Sweet but Pshycho &quot;</i>
                                        </div>
                                        <div className={styles.socialsCard}>
                                            <a className={styles.githubBackground} href='#'><img src='/github.png' alt='Archi github' /></a>
                                            <a className={styles.linkedinBackground} href='#'><img src='/linkedin.png' alt='Archi linkedin' /></a>
                                            <a className={styles.codepenBackground} href='#'><img src='/codepen.png' alt='Archi codepen' /></a>
                                        </div>
                                    </div>
                                    {/* Riya Goyal */}
                                    <div className={styles.cardcomp}>
                                        <div className={styles.imageContainer}>
                                            <h3>Riya Goyal</h3>
                                            <img src='/riya.jpg' alt='Riya pic' />
                                        </div>
                                        <div className={styles.cardcontent}>
                                            <div className={styles.tags}>
                                                <span>HTML</span>
                                                <span>CSS</span>
                                                <span>JavaScript</span>
                                                <span>React</span>
                                                <span>WordPress</span>
                                                <span>Canva</span>
                                                <span>AR</span>
                                                <span>Front End Developer</span>
                                            </div>
                                            <i className={styles.quotes}>&quot; Chim tamak tum tum &quot;</i>
                                        </div>
                                        <div className={styles.socialsCard}>
                                            <a className={styles.githubBackground} href='#'><img src='/github.png' alt='Riya github' /></a>
                                            <a className={styles.linkedinBackground} href='#'><img src='/linkedin.png' alt='Riya linkedin' /></a>
                                            <a className={styles.codepenBackground} href='#'><img src='/codepen.png' alt='Riya codepen' /></a>
                                        </div>
                                    </div>
                                    {/* Agrim Kulshreshtha */}
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
                                        <i className={styles.quotes}> &quot; I am Batman &quot; </i>
                                    </div>
                                    <div className={styles.socialsCard}>
                                        <a className={styles.githubBackground} href='https://github.com/FINESTMOSAIC' target="_blank"><img src='/github.png' alt='agrim github'  /></a>
                                        <a className={styles.linkedinBackground} href='https://www.linkedin.com/in/agrim-kulshreshtha/' target="_blank"><img src='/linkedin.png' alt='agrim linkedin' /></a>
                                        <a className={styles.codepenBackground} href='https://agrimk.com/' target="_blank"><img src='/codepen.png' alt='agrim codepen' /></a>
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
