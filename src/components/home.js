import React from 'react';
import * as styles from './home.module.css';
import { navigate } from 'gatsby';
import BackgroundStatic from './background/background-static';

const Home = () => {
  return (
    <BackgroundStatic home={true}>
      <div className={styles.homePageHeadlines}>
        <h1 className={styles.mainHeader}> Danny D'Alessandro</h1>
        <h2 className={styles.subHeader}>
          {' '}
          Multi-Instrumentalist | Singer-Songwriter | Arranger
        </h2>
        <button
          className={styles.contactButton}
          onClick={() => {
            navigate('/contact');
          }}>
          Book Now
        </button>
      </div>
    </BackgroundStatic>
  );
};

export default Home;
