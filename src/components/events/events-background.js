import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const BackgroundStatic = (props) => {
  return (
    <div style={{ display: 'grid' }}>
      <StaticImage
        style={{
          gridArea: '1/1',
          maxHeight: 654,
        }}
        layout='fullWidth'
        aspectRatio={16 / 9}
        alt=''
        src={'../../images/Wedding Bg Photo Edited.png'}
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid',
        }}>
        {props.children}
      </div>
    </div>
  );
};

export default BackgroundStatic;
