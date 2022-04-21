import React from 'react';

import Container from './container';
import * as styles from './footer.module.css';
const Footer = function () {
  return (
    <Container as='footer'>
      <div className={styles.container}></div>
    </Container>
  );
};

export default Footer;
