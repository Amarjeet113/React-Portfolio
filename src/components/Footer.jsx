import React from 'react';
import styles from './Footer.module.css';
import programmingIcon from '../assets/programming.png';
import gmailIcon from '../assets/gmail.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/githubfooter.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href="https://leetcode.com/u/Amarjeet113/" target="_blank" rel="noopener noreferrer">
            <img src={programmingIcon} alt="Programming" />
          </a>
          <a href="mailto:kumaramarjeet44244@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/amarjeet-kumar-293252228/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Amarjeet113" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>

        <div className={styles.contactInfo}>
          <p>&copy; 2024 AmarjeetPortfolio. All Rights Reserved.</p>
          <p>Email:kumaramarjeet44244@gmail.com</p>
          <p>Phone: +91 9155107794</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
