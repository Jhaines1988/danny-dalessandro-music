import React from 'react';
import * as styles from './home.module.css';

import { StaticImage } from 'gatsby-plugin-image';
const Home = (props) => {
  return (
    <>
      <h1 className={styles.logoAnimation}>Danny D'Alessandro Music</h1>
      <div className={styles.heroTextContainer}>
        <StaticImage
          src='../images/Photo Mar 22, 6 39 11 PM.jpg'
          alt="Danny D'alessandro"
          className={styles.image}
        />

        <p className={styles.content}>
          Danny D'Alessandro is a multi-instrumentalist, singer-songwriter, and
          arranger, based in Telluride, CO.
        </p>
        <div className={styles.buttonContainer}>
          <button onClick={() => {}}>Contact</button>
          <button onClick={() => {}}>Listen</button>
          <button onClick={() => {}}>Learn More</button>
        </div>
      </div>
      <div className={styles.videoFeed}>
        <h2 className={styles.heading2}>Listen Up!</h2>
        <div
          name='placeholder'
          style={{
            minHeight: 250,
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}>
          {' '}
          Video Content
        </div>
        <div
          name='placeholder'
          style={{
            minHeight: 250,
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}>
          {' '}
          Video Content
        </div>
        <div
          name='placeholder'
          style={{
            minHeight: 250,
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}>
          {' '}
          Video Content
        </div>
      </div>
    </>
  );
};

export default Home;
