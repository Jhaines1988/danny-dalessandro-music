import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import '../variable.css';
import '../global.css';
import * as styles from './about-layout.module.css';
import Seo from '../Seo';
import { motion } from 'framer-motion';
const AboutLayout = function ({ title, ...props }) {
  const { children } = props;
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <Seo title={title} />
      <Navigation />
      <Container>
        <motion.main
          variants={pageVariants}
          initial='initial'
          animate='animate'
          exit='exit'>
          {children}
        </motion.main>
      </Container>
      <Footer />
    </>
  );
};

export default AboutLayout;
