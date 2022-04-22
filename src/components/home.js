import React from 'react';
import * as styles from './home.module.css';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
const Home = ({ data }) => {
  console.log('data', data);
  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.logoAnimation}>Danny D'Alessandro Music</h1>
      <div className={styles.heroTextContainer}>
        <StaticImage
          src='../images/BlackAndWhiteBanjo.jpg'
          alt="Danny D'Alessandro"
          className={styles.imageWrapper}
        />

        <ul className={styles.list}>
          <li className={styles.listItem}>Multi-Instrumentalist</li>
          <li className={styles.listItem}>Singer-Songwriter</li>
          <li className={styles.listItem}>Studio Musician</li>
          <li className={styles.listItem}>Arranger</li>
        </ul>

        <button
          className={styles.contactButton}
          onClick={() => {
            navigate('/contact');
          }}
          activeClassName='active'>
          Contact
        </button>
      </div>
      <div className={styles.videoFeed}>
        <h2 className={styles.heading2}>
          {' '}
          <Link to='/listen' activeClassName='active'>
            Listen Up!
          </Link>
        </h2>

        <iframe
          className={styles.embedVideoContainer}
          width='577'
          height='324'
          src='https://www.youtube.com/embed/h5yJQMt0Hyo'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          // webkitallowfullscreen='true'
          // mozallowfullscreen='true'
          allowFullScreen
        />
        {/* <div
          name='placeholder'
          style={{
            minHeight: 300,
            minWidth: 300,
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}>
          {' '}
          Video Content
        </div> */}
      </div>
    </div>
  );
};

export default Home;
