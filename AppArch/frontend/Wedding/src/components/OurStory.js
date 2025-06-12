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
            We first met in the most unexpected way — a moment that felt like it was meant to be.
            What started as a casual conversation quickly turned into something special.
          </p>
        </div>
      </div>

      <div className={styles.storySectionAlt}>
        <div className={styles.textContent}>
          <h2>Our First Date</h2>
          <p>
            From that first evening walk to endless shared laughter, our first date was
            the beginning of a beautiful journey together.
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
            With a heart full of love and a ring in hand, the proposal was magical — a promise
            of forever in the most beautiful setting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;