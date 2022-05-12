import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './about-hero.module.css';
import { graphql, useStaticQuery } from 'gatsby';
const AboutHero = ({ hero }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulMusician(isDanny: { eq: true }) {
        heroImage {
          gatsbyHero {
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              layout: CONSTRAINED
              width: 1000
              cornerRadius: 10
              aspectRatio: 1
            )
          }
        }
      }
    }
  `);

  const image = data.contentfulMusician.heroImage.gatsbyHero.gatsbyImageData;
  return (
    <figure className={styles.imageContainer}>
      <GatsbyImage
        image={image}
        className={styles.heroImage}
        alt='Danny playing the saxophone on stage. Image is modified to create a blue tint'
      />
      {/* <figcaption>Danny Playing Sax</figcaption> */}
    </figure>
  );
};

export default AboutHero;
