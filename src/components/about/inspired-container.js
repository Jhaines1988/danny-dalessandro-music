import React from 'react';
import * as styles from './inspired-container.module.css';
import AboutHeader from './about-bio-header';
import InspiredText from './inspired-text-blurb';
const InspiredContainer = ({ inspiredTextArray }) => {
  const [styleNode, natureNode] = inspiredTextArray;

  return (
    <div className={styles.inspiredContainer}>
      <AboutHeader headerText='Style' as='h3' />
      <InspiredText text={styleNode.description.childMarkdownRemark.html} />
      <AboutHeader headerText='Nature' as='h4' />
      <InspiredText text={natureNode.description.childMarkdownRemark.html} />
    </div>
  );
};

export default InspiredContainer;
