import React from 'react';
import styles from './styles/moreInfo.module.css';
import entrancePhoto from './assets/entrance.webp'; // Replace with your image

const MoreInfo = () => {
  return (
    <div className={styles.moreInfoPage}>
    

      {/* Venue Section */}
      <section className={styles.section}>
        <h2>Wedding Venue</h2>
        <p>9313 Blue Ball Rd, Stewartstown, PA 17363</p>
        <div className={styles.mapContainer}>
          <iframe
            title="Wedding Venue Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0189748396686!2d-76.59787082386741!3d39.790920671541344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7d4aa87fd3e01%3A0x92798a7b234e5bc2!2s9313%20Blue%20Ball%20Rd%2C%20Stewartstown%2C%20PA%2017363!5e0!3m2!1sen!2sus!4v1718227754053!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Hotel Section */}
      <section className={styles.section}>
        <h2>Hotel Accommodations</h2>
        <p>
          <strong>Hampton Inn Shrewsbury</strong><br />
          1000 Far Hills Dr, New Freedom, PA 17349
        </p>
        <a
          href="https://www.hilton.com/en/hotels/swypahx-hampton-shrewsbury/?SEO_id=GMB-AMER-HX-SWYPAHX&y_source=1_MjA4MTc3MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
          className={styles.hotelLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Hotel Website
        </a>
      </section>

      {/* Parking Info Section */}
      <section className={styles.section}>
        <h2>Parking Info</h2>
        <p>
          When you arrive at the venue, parking will be simple and clearly guided.
          There will be attendants directing cars to the designated parking area right off the entrance.
        </p>
        <p>
          You won't need to worry about finding a spot — just follow the signs and friendly faces as you pull in!
        </p>
        <div className={styles.imageContainer}>
          <img src={entrancePhoto} alt="Venue Entrance" />
          <p className={styles.imageCaption}>
            This is where you'll arrive! Look for signage and guides as you pull in.
          </p>
        </div>
      </section>

      {/* No Kids Policy */}
      <section className={styles.section}>
        <h2>Adults-Only Celebration</h2>
        <p className={styles.kidNote}>
          We kindly request that our wedding be an adults-only celebration.  
          We love your little ones, but we hope you enjoy a relaxing evening with us 💕
        </p>
      </section>
    </div>
  );
};

export default MoreInfo;