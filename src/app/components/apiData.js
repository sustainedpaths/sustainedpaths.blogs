"use client";
import { useState, useEffect, useRef } from "react";
import Loader from './loader.js'; // Ensure correct import path
import styles from './apiData.module.css'; // Import the CSS module for styling

export default function First() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);
    const intervalRef = useRef(null); // Store the interval ID
    const isDragging = useRef(false); // Track dragging state
    const startPos = useRef(0); // Track the initial position on mouse down
    const scrollLeft = useRef(0); // Track the scroll position on mouse down

    const fetchData = async () => {
        const config = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        try {
            const res = await fetch('/api/data', config);
            const res_val = await res.json();
            if (res.ok) {
                setArticles(res_val.articles);
            } else {
                throw new Error(res_val.message || 'Unknown error');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        } finally {
            setTimeout(() => setLoading(false), 1000);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!loading && containerRef.current) {
            const container = containerRef.current;
            let scrollAmount = 0;
            const cardWidth = 250; // width of a single card
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
    }, [loading, articles]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };

    return (
        <>
            {loading ? (
                <Loader isVisible={loading} />
            ) : (
                <div className={styles.container} ref={containerRef}>
                    {articles.map((article, index) => (
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.card} key={index}>
                            <img src={article.urlToImage} alt={article.title} className={styles.image} />
                            <div className={styles.content}>
                                <h4 className={styles.title}>{truncateText(article.title, 40)}</h4>
                                <p className={styles.description}>{truncateText(article.description, 80)}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}