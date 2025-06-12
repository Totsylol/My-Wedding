import React from 'react';
import styles from './styles/weddingParty.module.css';
import bestManImg from './assets/Placeholder.jpg';
import g1 from './assets/Placeholder.jpg';
import g2 from './assets/Placeholder.jpg';
import g3 from './assets/Placeholder.jpg';
import g4 from './assets/Placeholder.jpg';

import maidOfHonorImg from './assets/Placeholder.jpg';
import b1 from './assets/Placeholder.jpg';
import b2 from './assets/Placeholder.jpg';
import b3 from './assets/Placeholder.jpg';

const WeddingParty = () => {
  const groomsmen = [
    { name: 'Best Man', img: bestManImg, highlight: true },
    { name: 'Groomsman 1', img: g1 },
    { name: 'Groomsman 2', img: g2 },
    { name: 'Groomsman 3', img: g3 },
    { name: 'Groomsman 4', img: g4 },
  ];

  const bridesmaids = [
    { name: 'Maid of Honor', img: maidOfHonorImg, highlight: true },
    { name: 'Bridesmaid 1', img: b1 },
    { name: 'Bridesmaid 2', img: b2 },
    { name: 'Bridesmaid 3', img: b3 },
  ];

  const renderParty = (title, people) => (
    <div className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {people.map((person, idx) => (
          <div
            key={idx}
            className={`${styles.bubbleContainer} ${person.highlight ? styles.highlight : ''}`}
          >
            <div className={styles.bubble}>
              <img src={person.img} alt={person.name} />
            </div>
            <p>{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.weddingPartyPage}>
      {renderParty('Groomsmen', groomsmen)}
      {renderParty('Bridesmaids', bridesmaids)}
    </div>
  );
};

export default WeddingParty;