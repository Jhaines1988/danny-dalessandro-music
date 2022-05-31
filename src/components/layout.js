import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import Container from './container';
import Seo from './Seo';
import './variable.css';
import './global.css';
import '@fontsource/lato';
import '@fontsource/lato/700.css';
import { motion } from 'framer-motion';
const Layout = function ({ title, ...props }) {
  const { children } = props;
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  console.log(props, 'here');
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

export default Layout;
