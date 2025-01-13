import React, { useState, useEffect } from 'react';
import styles from './styles/navbar.module.css';

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('visible');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('hidden'); // Scrolling down
      } else {
        setScrollDirection('visible'); // Scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <nav className={`${styles.navbar} ${styles[scrollDirection]}`}>
      <div
        className={`${styles.hamburgerMenu} ${isDropdownOpen ? styles.open : ''}`}
        onClick={toggleDropdown}
      >
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
      </div>

      <div className={styles.title}>The Palm Wedding</div>

      <div className={styles.rsvpButtonContainer}>
        <button className={styles.rsvpButton}>RSVP</button>
      </div>

      <div
        className={`${styles.hamburgerMenuDropdown} ${
          isDropdownOpen ? styles.open : ''
        }`}
      >
        <button className={styles.closeButton} onClick={closeDropdown}>
          ←
        </button>
        <button className={styles.dropdownButton}>RSVP</button>
        <button className={styles.dropdownButton}>Wedding Registry</button>
        <button className={styles.dropdownButton}>Gallery</button>
        <button className={styles.dropdownButton}>More Info</button>
      </div>
    </nav>
  );
};

export default Navbar;
