import React from 'react';
import styles from './Experience.module.css'; // Adjust the path if necessary
import backend from '../assets/backend.png';
import frontend from '../assets/frontend.png';
import problemsolving from '../assets/problemsolving.png';

const Experience = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.projectHeading}>
            My <strong className={styles.purple}>Expertise</strong>
        </h1>

        <div className={styles.horizontalBoxes}>
            <div className={styles.box}>
                <h3>Problem Solving</h3>
                <img src={problemsolving} alt="Problem Solving logo" width="90px" height="90px" />
            </div>

            <div className={styles.box}>
                <h3>Front-End Dev</h3>
                <img src={frontend} alt="Frontend logo" width="70px" height="70px" />
            </div>

            <div className={styles.box}>
                <h3>Back-End Dev</h3>
                <img src={backend} alt="Backend logo" width="70px" height="70px" />
            </div>
        </div>
        
        <h1 className={styles.projectHeading}>
            My <strong className={styles.purple}>Skills</strong> set includes....
        </h1>

        <div className={styles.skillsContainer}>
            <div className={styles.box}>
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://www.python.org" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" />
                </a>
            </div>

            <div className={styles.box}>
                <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
                </a>
            </div>
        </div>
    </div>
  );
}

export default Experience;
