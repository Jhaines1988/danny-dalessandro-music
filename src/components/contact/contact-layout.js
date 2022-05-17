import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import '../variable.css';
import '../global.css';
import * as styles from './contact-layout.module.css';
import GbiBridged from '../background/gbi-bridged';
const ContactLayout = function (props) {
  const { children } = props;

  return (
    <>
      <GbiBridged>
        <Navigation />

        <Container>
          <main className={styles.contactLayout}>{children}</main>
        </Container>

        <Footer />
      </GbiBridged>
    </>
  );
};

export default ContactLayout;
