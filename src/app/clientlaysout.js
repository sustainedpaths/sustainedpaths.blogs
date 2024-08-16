"use client";
import { useState, useEffect } from 'react';
import Loader from './components/loader.js'; 
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import useHoverAnimation from "./hooks/useHoverAnimation"; // Adjust the path as necessary

export default function ClientLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useHoverAnimation('nav a'); // Apply the animation to all a tags and buttons
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulate loading delay
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer); // Clean up timer
  }, []);
  return (
    <div>
        {loading && <Loader />} {/* Show loader while loading */}
<Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={`content-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}


