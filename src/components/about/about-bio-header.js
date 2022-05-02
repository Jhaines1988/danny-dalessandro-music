import React from 'react';
import * as styles from './about-bio-header.module.css';
const AboutHeader = ({ headerText, as = 'h1' }) => {
  const Tag = as;
  return <Tag className={styles.header}>{headerText} </Tag>;
};

export default AboutHeader;
