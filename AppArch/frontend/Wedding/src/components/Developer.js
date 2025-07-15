// src/components/Developer.jsx
import React from 'react';
import styles from './styles/developer.module.css';
import anims from './styles/animations.module.css';
import labPhoto from './assets/Homelab.jpg';

export default function Developer() {
  return (
    <div className={anims.fadeInDown}>
      <div className={styles.developerPage}>
        <h1 className={styles.title}>Developer Extras</h1>

        <div className={styles.developerContent}>
          <div className={styles.textContainer}>
            <p>
            This site is a custom React single-page application built entirely on the frontend with JavaScript by me, Jonah. 
            </p>
            <p>
            I host the production build on an Ubuntu Server VM under Proxmox, running an NGINX-Alpine container to serve the website build. 
            On the right I have 3 old laptops I use as my nodes for the server. Each node is connected with high availability through docker swarm. 
            Cloudflare sits in front as a reverse proxy for my home-lab setup. Feel free to explore the full source code on GitHub :)
            </p>
            <a
              href="https://github.com/Totsylol/My-Wedding"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              View on GitHub
            </a>
          </div>

          <div className={styles.imageContainer}>
            <img src={labPhoto} alt="Home Lab Setup" />
            <figcaption>Home Lab Setup</figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}
