import React from 'react';
import Navigation from '../navigation';
import Seo from '../Seo';
import { motion } from 'framer-motion';
export default function HomeLayout({ title, ...props }) {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <Seo title={title} />
      <Navigation />
      <motion.main
        variants={pageVariants}
        initial='initial'
        animate='animate'
        exit='exit'>
        {props.children}
      </motion.main>
    </>
  );
}
