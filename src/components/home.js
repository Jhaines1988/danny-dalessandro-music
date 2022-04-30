import React from 'react';
import * as styles from './home.module.css';

import { navigate } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import GbiBridged from './gbi-bridged';
import Iframe from './Iframe';
import VideoBanner from './videobanner';
const Home = ({ videoData }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulBackgroundImages(isHomePageHero: { eq: true }) {
        picture {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(data.contentfulBackgroundImages.picture);

  return (
    <div className={styles.outerContainer}>
      {/* <GbiBridged image={pluginImage}> */}
      <VideoBanner />
      <div style={{ display: 'grid ' }}>
        {/* <StaticImage
          style={{ gridArea: '1/1' }}
          layout='fullWidth'
          alt=''
          src={'../images/colorful-sax-hero.jpg'}
          formats={['auto', 'webp', 'avif']}
        /> */}
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
            }}
            activeClassName='active'>
            Contact
          </button>
        </div>
      </div>
      {/* </GbiBridged> */}

      {/* <div className={styles.videoFeed}>
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
      </div> */}
    </div>
  );
};

export default Home;
