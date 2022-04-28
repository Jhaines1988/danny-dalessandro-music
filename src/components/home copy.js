import React from 'react';
import * as styles from './homecopy.module.css';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import GbiBridged from './gbi-bridged';
import Iframe from './Iframe';
import VideoBanner from './videobanner';
const Home = ({ videoData }) => {
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
        {videoData.map((node, i) => (
          <Iframe
            key={i}
            videoURL={node.url}
            title={node.title}
            tags={node.tags}
          />
        ))}
      </div>
      <GbiBridged />
    </div>
  );
};

export default Home;
