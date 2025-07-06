// src/components/OurStory.jsx
import React from 'react';
import styles from './styles/ourStory.module.css';
import meetPhoto from './assets/Placeholder.jpg';         // your “How We Met” image
import datePhoto from './assets/Placeholder.jpg';   // your “Our First Date” image
import proposalPhoto from './assets/Placeholder.jpg'; // your “Proposal” image

const OurStory = () => {
  const stories = [
    {
      img: meetPhoto,
      alt: 'How We Met',
      title: '💖 How We Met 💖',
      text: 'Jonah and Hannah worked together at a boba tea shop called Chatime. It was love at first brew! 🧋💘',
    },
    {
      img: datePhoto,
      alt: 'Our First Date',
      title: '🌹 Our First Date 🌹',
      text: 'We strolled through the botanical gardens hand in hand, mesmerized by the blooms around us. 🌷🥂',
    },
    {
      img: proposalPhoto,
      alt: 'The Proposal',
      title: '💍 The Proposal 💍',
      text: 'Under a canopy of stars, Jonah got down on one knee…and she said “Yes”! 🌟💍',
    },
  ];

  return (
    <div className={styles.ourStoryPage}>
      {stories.map(({ img, alt, title, text }, i) => (
        <section key={i} className={styles.storyBlock}>
          <div className={styles.imageContainer}>
            <img src={img} alt={alt} />
          </div>
          <div className={styles.textContent}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OurStory;