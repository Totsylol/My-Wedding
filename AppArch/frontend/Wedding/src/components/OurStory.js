import React from 'react';
import styles from './styles/ourStory.module.css';
import couplePhoto from './assets/photo1.jpg'; // replace with your preferred image

const OurStory = () => {
  return (
    <div className={styles.ourStoryPage}>
      <div className={styles.storySection}>
        <div className={styles.imageContainer}>
          <img src={couplePhoto} alt="Our Journey" />
        </div>
        <div className={styles.textContent}>
          <h2>How We Met</h2>
          <p>
          Text 
          </p>
        </div>
      </div>

      <div className={styles.storySectionAlt}>
        <div className={styles.textContent}>
          <h2>Our First Date</h2>
          <p>
            Text
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={couplePhoto} alt="Our First Date" />
        </div>
      </div>

      <div className={styles.storySection}>
        <div className={styles.imageContainer}>
          <img src={couplePhoto} alt="Proposal" />
        </div>
        <div className={styles.textContent}>
          <h2>The Proposal</h2>
          <p>
            Text
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;