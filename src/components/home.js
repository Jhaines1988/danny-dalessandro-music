import React from 'react';
import * as styles from './home.module.css';
const Home = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     contentfulHeroImages(isHomePageHero: { eq: true }) {
  //       id
  //       gatsbyHero {
  //         gatsbyImageData(
  //           layout: CONSTRAINED
  //           width: 2500
  //           cropFocus: TOP
  //           placeholder: TRACED_SVG
  //         )
  //       }
  //     }
  //   }
  // `);

  // const image = getImage(data.contentfulHeroImages.gatsbyHero);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.logoAnimation}>Danny D'Alessandro Music</h1>

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
