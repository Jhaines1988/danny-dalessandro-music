import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './about-hero.module.css';
const AboutHero = ({ hero }) => {
  return (
    <>
      <GatsbyImage
        alt="Danny D'Alessandro playing banjo on stage"
        image={hero}
        className={styles.heroImage}
      />
    </>
  );
};

export default AboutHero;
