"use client";
import { useState, useEffect, useRef } from "react";
import Styles from "./apiData.module.css";

export default function First() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);

    const fetchData = async () => {
        const config = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        try {
            const res = await fetch('/api/data-blogs', config);
            const res_val = await res.json();
            console.log("Full API response:", res_val); // Log the entire response

            if (res.ok) {
                setArticles(res_val.response.docs);
            } else {
                throw new Error(res_val.message || 'Unknown error');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        }
    };
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (containerRef.current && articles.length > 0) {
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
    }, [articles]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {articles.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div className={Styles.container} ref={containerRef}>
                    {articles.map((article, index) => (
                        <a key={index} href={article.web_url} target="_blank" rel="noopener noreferrer" className={Styles.articlecard}>
                            <h4>{truncateText(article.abstract, 70)}</h4>
                            <p>{new Date(article.pub_date).toLocaleDateString()}</p>
                            <p>{article.byline.original}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
