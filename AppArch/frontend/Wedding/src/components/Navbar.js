import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
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
      {/* Hamburger Menu */}
      <div
        className={`${styles.hamburgerMenu} ${isDropdownOpen ? styles.open : ''}`}
        onClick={toggleDropdown}
      >
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
      </div>

      {/* Title */}
      <div className={styles.title}>
        <Link to="/" onClick={closeDropdown} className={styles.link}>
          The Palm Wedding
        </Link>
      </div>

      {/* RSVP Button */}
      <div className={styles.rsvpButtonContainer}>
        <button className={styles.rsvpButton}>RSVP</button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`${styles.hamburgerMenuDropdown} ${
          isDropdownOpen ? styles.open : ''
        }`}
      >
        <button className={styles.closeButton} onClick={closeDropdown}>
          ←
        </button>
        <Link to="/rsvp" onClick={closeDropdown} className={styles.dropdownButton}>
          RSVP
        </Link>
        <Link
          to="/registry"
          onClick={closeDropdown}
          className={styles.dropdownButton}
        >
          Wedding Registry
        </Link>
        <Link
          to="/gallery"
          onClick={closeDropdown}
          className={styles.dropdownButton}
        >
          Gallery
        </Link>
        <Link to="/info" onClick={closeDropdown} className={styles.dropdownButton}>
          More Info
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
