// src/components/OurStory.jsx
import React from 'react';
import styles from './styles/ourStory.module.css';
import meetPhoto from './assets/Date2.jpg';         // your “How We Met” image
import datePhoto from './assets/Date.jpg';   // your “Our First Date” image
import proposalPhoto from './assets/Proposal.jpg'; // your “Proposal” image

const OurStory = () => {
  const stories = [
    {
      img: meetPhoto,
      alt: 'How We Met',
      title: 'How We Met',
      text: 'We met at Chatime, where we both worked. One evening after our shift, I asked Hannah if she’d like to catch a movie with me. On our first date, we stopped at Cold Stone for ice cream before heading to AMC to see “The Creator". Little did we know, that evening marked the beginning of our greatest adventure together.' ,
    },
    {
      img: proposalPhoto,
      alt: 'The Proposal',
      title: 'The Proposal',
      text: 'I took Hannah to our favorite beach. We sat on the sand for a while, then took a walk along the shoreline and asked a couple of people to snap our photos. As we paused for one final shot, I knelt and asked her to marry me. Afterwards, we caught the ferry and enjoyed dinner at a seafood restaurant by the harbor.',
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