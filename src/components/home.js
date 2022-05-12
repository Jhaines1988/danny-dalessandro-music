import React from 'react';
import * as styles from './home.module.css';

import { navigate } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import VideoBanner from './videobanner';
const Home = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHeroImages(isHomePageHero: { eq: true }) {
        id
        gatsbyHero {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 2500
            cropFocus: TOP
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `);

  const image = getImage(data.contentfulHeroImages.gatsbyHero);
  // const data = useStaticQuery(graphql`
  //   {
  //     contentfulHeroImages(isHomePageHero: { eq: true }) {
  //       id
  //       childContentfulHeroImagesHeroJsonNode {
  //         secure_url
  //       }
  //     }
  //   }
  // `);
  // const image = getImage(data.contentfulHeroImages.hero);

  return (
    <div className={styles.outerContainer}>
      <VideoBanner />

      <GatsbyImage image={image} alt='' className={styles.imageWrapper} />
      {/* <img
          className={styles.imageWrapper}
          src={
            data.contentfulHeroImages.childContentfulHeroImagesHeroJsonNode
              .secure_url
          }
        /> */}
      <div className={styles.heroTextContainer}>
        <h1 className={styles.logoAnimation}>Danny D'Alessandro Music</h1>
        {/* <img
          className={styles.imageWrapper}
          src={
            data.contentfulHeroImages.childContentfulHeroImagesHeroJsonNode
              .secure_url
          }
        /> */}
        <ul className={styles.list}>
          <li className={styles.listItem}>Multi-Instrumentalist</li>
          <li className={styles.listItem}>Singer-Songwriter</li>
          <li className={styles.listItem}>Studio Musician</li>
          <li className={styles.listItem}>Arranger</li>
        </ul>
        {/* <button
          className={styles.contactButton}
          onClick={() => {
            navigate('/contact');
          }}>
          Contact
        </button> */}
      </div>
    </div>
    // </div>
  );
};

export default Home;
