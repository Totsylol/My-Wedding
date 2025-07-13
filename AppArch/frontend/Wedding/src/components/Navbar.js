import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/navbar.module.css';

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('visible');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Hide/show navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setScrollDirection(window.scrollY > lastScrollY ? 'hidden' : 'visible');
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${styles[scrollDirection]}`}>
      {/* Menu trigger */}
      <div className={styles.menuWrapper} onClick={toggleDropdown}>
        <span className={styles.menuText}>Menu</span>
      </div>

      {/* Title */}
      <div className={styles.title}>
        <Link to="/" onClick={closeDropdown} className={styles.link}>
          The Palm Wedding
        </Link>
      </div>

      {/* RSVP Button */}
      <div className={styles.rsvpButtonContainer}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdwwdOb40TXGG6wtD6t-9Sx-DyzSvwsDxo7q8UDblFn6PrOeg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.rsvpButton}
        >
          RSVP
        </a>
      </div>

      {/* Sliding Dropdown Menu */}
      <div
        ref={dropdownRef}
        className={`${styles.hamburgerMenuDropdown} ${
          isDropdownOpen ? styles.open : ''
        }`}
      >
        <button className={styles.closeButton} onClick={closeDropdown}>
          ←
        </button>

        <Link to="/" onClick={closeDropdown} className={styles.dropdownButton}>
          Home
        </Link>
        <Link to="/our-story" onClick={closeDropdown} className={styles.dropdownButton}>
          Our Story
        </Link>
        <Link to="/wedding_party" onClick={closeDropdown} className={styles.dropdownButton}>
          Wedding Party
        </Link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdwwdOb40TXGG6wtD6t-9Sx-DyzSvwsDxo7q8UDblFn6PrOeg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.dropdownButton}
        >
          RSVP
        </a>
        <a
          href="https://www.amazon.com/wedding/registry/K9APEWYGL6A4"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.dropdownButton}
        >
          Wedding Registry
        </a>
        <Link to="/gallery" onClick={closeDropdown} className={styles.dropdownButton}>
          Gallery
        </Link>
        <Link to="/info" onClick={closeDropdown} className={styles.dropdownButton}>
          More Info
        </Link>
        <Link to="/developer" onClick={closeDropdown} className={styles.dropdownButton}>
          Developer Extras
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;