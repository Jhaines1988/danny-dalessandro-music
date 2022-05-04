import React from 'react';
import * as styles from './inspired-container.module.css';

import InspiredText from './inspired-text-blurb';

const InspiredContainer = ({ inspiredTextArray, ...props }) => {
  return (
    <div className={styles.inspiredContainer}>
      {inspiredTextArray.map((inspiredNode, i) => (
        <InspiredText
          key={i}
          text={inspiredNode.description.childMarkdownRemark.html}
          cloudinaryImages={
            inspiredNode.images
              .childrenContentfulCarouselImagesCloudinaryCarouselJsonNode
          }
        />
      ))}
    </div>
  );
};

export default InspiredContainer;
