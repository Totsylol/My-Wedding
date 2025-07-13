// src/components/Homepage.jsx
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import styles from './styles/home.module.css';
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import anims from './styles/animations.module.css';

const Homepage = () => {
  useEffect(() => {}, []);

  const handleRSVPClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdwwdOb40TXGG6wtD6t-9Sx-DyzSvwsDxo7q8UDblFn6PrOeg/viewform?usp=header',
      '_blank'
    );
  };

  const handleRegistryClick = () => {
    window.open(
      'https://www.amazon.com/wedding/registry/K9APEWYGL6A4',
      '_blank'
    );
  };

  return (
    <>
      {/* Navbar stays outside the animated wrapper */}
      <Navbar />

      {/* Page content with fade-in animation */}
      <div className={anims.fadeInDown}>
        <div className={styles.container}>
          <div className={styles.imageColumnLeft}>
            <img
              src={photo1}
              alt="Jonah and Hannah"
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.textSection}>
            <h1>Jonah & Hannah</h1>
            <p>Join us for our special day!</p>
          </div>
        </div>

        <div className={styles.containerSwapped}>
          <div className={styles.textSection}>
            <h1>Reception Details</h1>
            <p>
              Enjoy dinner, dancing, and an unforgettable evening with us.
            </p>
          </div>
          <div className={styles.imageColumnRight}>
            <img
              src={photo2}
              alt="Reception"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.rsvpRegistrySection}>
          <div className={styles.panel} onClick={handleRSVPClick}>
            <h2>RSVP</h2>
          </div>
          <div className={styles.panel} onClick={handleRegistryClick}>
            <h2>Wedding Registry</h2>
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineContent}>
              <h3>Ceremony</h3>
              <p>3:30 PM - Join us for our vows.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineContent}>
              <h3>Cocktail Hour</h3>
              <p>4:00 PM - Drinks and small bites to mingle.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineContent}>
              <h3>Reception</h3>
              <p>5:00 PM - Dinner, dancing, and celebration.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineContent}>
              <h3>Farewell</h3>
              <p>9:30 PM - Send-off as newlyweds!</p>
            </div>
          </div>
        </div>

        {/* Final Countdown & Calendar */}
        <div className={styles.calendarSection}>
          <div className={styles.calendarBox}>
            <div className={styles.calendarHeader}>September 2025</div>
            <div className={styles.calendarGrid}>
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              <span></span>
              <span className={styles.date}>1</span>
              <span className={styles.date}>2</span>
              <span className={styles.date}>3</span>
              <span className={styles.date}>4</span>
              <span className={styles.date}>5</span>
              <span className={styles.date}>6</span>
              <span className={`${styles.date} ${styles.heart}`}>7</span>
              <span className={styles.date}>8</span>
              <span className={styles.date}>9</span>
              <span className={styles.date}>10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
