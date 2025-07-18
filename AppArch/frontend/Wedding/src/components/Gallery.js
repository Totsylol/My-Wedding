import React, { useState } from 'react';
import styles from './styles/gallery.module.css';
import anims from './styles/animations.module.css';
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';
import photo5 from './assets/photo5.jpg';
import photo6 from './assets/photo6.jpg';
import photo7 from './assets/photo7.jpg';
import photo8 from './assets/photo8.jpg';
import photo9 from './assets/photo9.jpg';
import photo10 from './assets/photo10.jpg';
import photo11 from './assets/photo11.jpg';
import photo12 from './assets/photo12.jpg';
import photo13 from './assets/photo13.jpg';
import photo14 from './assets/photo14.jpg';
import photo15 from './assets/photo15.jpg';
import photo16 from './assets/photo16.jpg';
import photo17 from './assets/photo17.jpg';
import photo18 from './assets/photo18.jpg';
import photo19 from './assets/photo19.jpg';
import photo20 from './assets/photo20.jpg';
import photo21 from './assets/photo21.jpg';
import photo22 from './assets/photo22.jpg';
import photo23 from './assets/photo23.jpg';

const photos = [
  photo1, photo2, photo3, photo4, photo5, photo6,
  photo7, photo8, photo9, photo10, photo11, photo12,
  photo13, photo14, photo15, photo16, photo17, photo18,
  photo19, photo20, photo21, photo22, photo23
];

const Gallery = ({ setLightboxOpen }) => {
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const openLightbox = (photo) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentPhoto(null);
    setLightboxOpen(false);
  };

  return (
    <div className={anims.anims}>
    <div className={styles.galleryPage}>
      <div className={styles.galleryGrid}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openLightbox(photo)}
          >
            <img
              src={photo}
              alt={`Wedding moment ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {currentPhoto && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
        >
          <img
            src={currentPhoto}
            alt="Enlarged wedding memory"
            onClick={(e) => e.stopPropagation()}
          />
          <button className={styles.closeButton} onClick={closeLightbox}>
            &times;
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Gallery;