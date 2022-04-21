import React from 'react';
import * as styles from './home.module.css';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
const Home = (props) => {
  return (
    <>
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
