"use client";
import { useState, useEffect, useRef } from "react";
import Loader from './loader.js'; // Ensure correct import path
import styles from './apiData.module.css'; // Import the CSS module for styling
export default function First({ articles = [] }) {
    const containerRef = useRef(null);
    const intervalRef = useRef(null);
    const isDragging = useRef(false);
    const startPos = useRef(0);
    const scrollLeft = useRef(0);
    const loading = articles.length === 0; // Assume loading if articles are empty
    useEffect(() => {
        if (!loading && containerRef.current) {
            const container = containerRef.current;
            let scrollAmount = 0;
            const cardWidth = 250;
            const scrollStep = cardWidth + 10;

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

            intervalRef.current = setInterval(autoScroll, 4000);

            const pauseAutoScroll = () => clearInterval(intervalRef.current);
            const resumeAutoScroll = () => {
                clearInterval(intervalRef.current);
                intervalRef.current = setInterval(autoScroll, 4000);
            };

            const onMouseDown = (e) => {
                pauseAutoScroll();
                isDragging.current = true;
                startPos.current = e.pageX - container.offsetLeft;
                scrollLeft.current = container.scrollLeft;
            };

            const onMouseLeave = () => {
                isDragging.current = false;
                resumeAutoScroll();
            };

            const onMouseUp = () => {
                isDragging.current = false;
                resumeAutoScroll();
            };

            const onMouseMove = (e) => {
                if (!isDragging.current) return;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startPos.current) * 2;
                container.scrollLeft = scrollLeft.current - walk;
            };

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