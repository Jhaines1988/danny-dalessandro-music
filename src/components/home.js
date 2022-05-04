import React from 'react';
import * as styles from './home.module.css';

import { navigate } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import VideoBanner from './videobanner';
const Home = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHeroImages(isHomePageHero: { eq: true }) {
        id
        hero {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.contentfulHeroImages.hero);

  return (
    <div className={styles.outerContainer}>
      <VideoBanner />
      <div style={{ display: 'grid' }}>
        <GatsbyImage image={image} alt='' className={styles.imageWrapper} />

        <div className={styles.heroTextContainer}>
          <h1 className={styles.logoAnimation}>Danny D'Alessandro Music</h1>
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
            }}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
