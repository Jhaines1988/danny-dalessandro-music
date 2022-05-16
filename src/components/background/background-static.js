import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import banjo from '../../images/priscilla-du-preez-NEXmx_EI9j0-unsplash.jpg';
const BackgroundStatic = (props) => {
  return (
    <div style={{ display: 'grid' }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: '1/1',
          // You can set a maximum height for the image, if you wish.
          //   maxWidth: 1500,
          maxHeight: 1000,
        }}
        layout='fullWidth'
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={16 / 9}
        // This is a presentational image, so the alt should be an empty string
        alt=''
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          // '../../images/priscilla-du-preez-NEXmx_EI9j0-unsplash.jpg'
          '../../images/banjo-stock-cropped_h9fzsf-Blurred.jpg'
          // 'https://res.cloudinary.com/dli2yq8fm/image/upload/t_Blurred/v1652406782/Danny/banjo-stock-cropped_h9fzsf.jpg'
        }
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'center',
          display: 'grid',
        }}>
        {/* Any content here will be centered in the component */}
        {props.children}
      </div>
    </div>
  );
};

export default BackgroundStatic;
