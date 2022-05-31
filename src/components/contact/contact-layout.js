import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import Seo from '../Seo';
import '../variable.css';
import '../global.css';
import * as styles from './contact-layout.module.css';
import GbiBridged from '../background/gbi-bridged';
import { motion } from 'framer-motion';
const ContactLayout = function ({ title, ...props }) {
  const { children } = props;
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <Seo title={title} />
      <GbiBridged>
        <Navigation />

        <Container>
          <motion.main
            variants={pageVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className={styles.contactLayout}>
            {children}
          </motion.main>
        </Container>

        <Footer />
      </GbiBridged>
    </>
  );
};

export default ContactLayout;
