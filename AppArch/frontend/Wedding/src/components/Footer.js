import React from 'react';
import styles from './styles/footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Install react-icons if not installed

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Jonah & Hannah Palm</h2>
      <p>Join us for our big day!</p>
      <p>Sunday, September 7th, 2025 | Stewartstown PA</p>
      <div className={styles.divider}></div>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Jonah & Hannah Wedding
      </p>
    </footer>
  );
};

export default Footer;
