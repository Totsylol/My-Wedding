import React from 'react';
import styles from './styles/weddingParty.module.css';
import bestManImg from './assets/Ivan.jpg';
import g1 from './assets/Noah.jpg';
import g2 from './assets/Elijah.jpg';
import g3 from './assets/Elias.jpg';
import g4 from './assets/Kyum.jpg';
import anims from './styles/animations.module.css';
import maidOfHonorImg from './assets/Kammie.JPG';
import b1 from './assets/Natalie.jpg';
import b2 from './assets/Emily.jpg';
import b3 from './assets/Lilly.JPG';

const WeddingParty = () => {
  const groomsmen = [
    { name: 'Ivan', img: bestManImg, highlight: true },
    { name: 'Noah', img: g1 },
    { name: 'Elijah', img: g2 },
    { name: 'Elias', img: g3 },
    { name: 'Kyum', img: g4 },
  ];

  const bridesmaids = [
    { name: 'Kammie', img: maidOfHonorImg, highlight: true },
    { name: 'Natalie', img: b1 },
    { name: 'Emily', img: b2 },
    { name: 'Lillianna', img: b3 },
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
    <div className={anims.fadeInDown}>
    <div className={styles.weddingPartyPage}>
      {renderParty('Groomsmen', groomsmen)}
      {renderParty('Bridesmaids', bridesmaids)}
    </div>
    </div>
  );
};

export default WeddingParty;