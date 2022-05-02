import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import '../variable.css';
import '../global.css';
import * as styles from './about-layout.module.css';
const AboutLayout = function (props) {
  const { children } = props;

  return (
    <>
      <Navigation />
      <Container>
        <main className={styles.aboutLayout}>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default AboutLayout;
