import React from 'react';
import styles from './styles/developer.module.css';
// (optional) import any pics you want to showcase
import labPhoto from './assets/Placeholder.jpg';
import codeScreenshot from './assets/Placeholder.jpg';
import anims from './styles/animations.module.css';

export default function Developer() {
  return (
    <div className={anims.fadeInLeft}>
    <div className={styles.developerPage}>
      <h1>The Developer</h1>
      <p>
        I built this entire site from scratch in React, hosting it on my 
        triple-laptop home lab with NGINX and Docker. All code lives on 
        <a href="https://github.com/Totsylol/My-Wedding.git" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>.
      </p>
      
      <div className={styles.imageGrid}>
        <div className={styles.imageWrapper}>
          <img src={labPhoto} alt="My home lab setup" />
          <figcaption>Home Lab</figcaption>
        </div>
        <div className={styles.imageWrapper}>
          <img src={codeScreenshot} alt="Code screenshot" />
          <figcaption>React Code</figcaption>
        </div>
      </div>
    </div>
    </div>
  );
}
