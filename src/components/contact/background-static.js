import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './background-static.module.css';
const BackgroundStatic = (props) => {
  return (
    <div className={styles.outerContainer}>
      <StaticImage
        style={{
          gridArea: '1/1',
          // minHeight: '100vh',
          // maxWidth:2000
        }}
        layout='fullWidth'
        aspectRatio={1}
        alt=''
        src={
          '../../images/engin-akyurt-1E-PFrorFUA-unsplash_aqbhtm-light-blur.jpg'
        }
        formats={['auto', 'webp', 'avif']}
      />
      <div className={styles.mainContainer}>
        {/* Any content here will be centered in the component */}

        {props.children}
      </div>
    </div>
  );
};

export default BackgroundStatic;
