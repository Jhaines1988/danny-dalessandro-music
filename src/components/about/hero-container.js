import React from 'react';
import AboutHeader from './about-bio-header';
import AboutBio from './about-bio';
import AboutHero from './about-hero';
import * as styles from './hero-container.module.css';

const HeroContainer = function ({ headerText, hero, bioText, ...props }) {
  return (
    <div className={styles.heroContainer}>
      <AboutHeader headerText={headerText} />
      <AboutHero hero={hero} />
      <AboutBio bioText={bioText} />
    </div>
  );
};

export default HeroContainer;
