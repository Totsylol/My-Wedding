import React, { useState } from 'react';
import styles from './styles/home.module.css';
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <div className={styles.navbar}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
        </div>
        {menuOpen && (
          <div className={styles.hamburgerMenuDropdown}>
            <button className={styles.dropdownButton}>RSVP</button>
            <button className={styles.dropdownButton}>Wedding Registry</button>
            <button className={styles.dropdownButton}>Gallery</button>
            <button className={styles.dropdownButton}>More Info</button>
          </div>
        )}
      </div>

      <div className={styles.container}>
        <div className={styles.imageColumnLeft}>
          <img src={photo1} alt="Jonah and Hannah Wedding Photo" className={styles.image} />
        </div>

        <div className={styles.textSection}>
          <h1>Jonah and Hannah</h1>
          <p>Join us for our special day! RSVP and check out our wedding registry below.</p>
        </div>
      </div>

      <div className={styles.containerSwapped}>
        <div className={styles.textSection}>
          <h1>Reception Details</h1>
          <p>Enjoy our wedding reception! Find all the details below and make sure to RSVP for the dinner.</p>
        </div>
        <div className={styles.imageColumnRight}>
          <img src={photo2} alt="Wedding Reception Photo" className={styles.image} />
        </div>
      </div>

      {/* RSVP and Registry Section */}
      <div className={styles.rsvpRegistrySection}>
        <div className={styles.panel} onClick={handleRSVPClick}>
          <h2>RSVP</h2>
        </div>
        <div className={styles.panel} onClick={handleRegistryClick}>
          <h2>Wedding Registry</h2>
        </div>
      </div>

      {/* Timeline Section */}
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineContent}>
            <h3>Ceremony</h3>
            <p>3:00 PM - Join us for our vows....</p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineContent}>
            <h3>Cocktail Hour</h3>
            <p>4:00 PM - Enjoy drinks and snacks with friends and family.....</p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineContent}>
            <h3>Reception</h3>
            <p>5:30 PM - Celebrate with us over dinner, dancing, and more....</p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineContent}>
            <h3>Farewell</h3>
            <p>10:00 PM - Send-off as we start our new journey together....</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
