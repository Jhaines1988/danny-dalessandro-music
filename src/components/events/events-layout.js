import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import '../variable.css';
import '../global.css';
import BackgroundStatic from './events-background';
import EventsMainHeader from './events-main-header';
import Seo from '../Seo';
import { motion } from 'framer-motion';
const EventsLayout = function ({ title, header, ...props }) {
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
      <BackgroundStatic>
        <EventsMainHeader header={header} />
      </BackgroundStatic>
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

export default EventsLayout;
