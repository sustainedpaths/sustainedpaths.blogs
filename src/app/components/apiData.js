"use client";
import { useState, useEffect, useRef } from "react";
import Loader from './loader.js'; // Ensure correct import path
import styles from './apiData.module.css'; // Import the CSS module for styling

export default function First() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);

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
            // Ensure loader is visible for at least 1 second before setting loading to false
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

            const intervalId = setInterval(autoScroll, 4000); // adjust interval as needed

            return () => clearInterval(intervalId);
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
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.card} key ={index} >
             
                            <img src={article.urlToImage} alt={article.title} className={styles.image}  />
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
