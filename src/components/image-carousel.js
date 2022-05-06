import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import * as styles from './image-carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';
const variants = {
  enter: (direction) => {
    return {
      // x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      // x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
const chevronRight = icon({
  prefix: 'fas',
  iconName: 'chevron-right',
});
const chevronLeft = icon({ prefix: 'fas', iconName: 'chevron-left' });
const ImageCarousel = ({ cloudinaryImages }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, cloudinaryImages.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <div
          className={styles.imageWrapper}
          // variants={variants}
          // initial='enter'
          // animate='center'
          // exit='exit'>
        >
          {/* <button className={styles.prev} onClick={() => paginate(-1)}>
            <FontAwesomeIcon
              title='previous image in carousel'
              icon={chevronLeft}
              size='2xl'
              fixedWidth
            />
          </button> */}
          <motion.img
            className={styles.gatsbyImg}
            key={page}
            src={cloudinaryImages[imageIndex].secure_url}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            transition={{
              x: { type: 'tween', stiffness: 100, damping: 30 },
              opacity: { duration: 0.1 },
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              // console.log(swipe);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
          {/* <button className={styles.next} onClick={() => paginate(1)}>
            <FontAwesomeIcon
              title='next image in carousel'
              icon={chevronRight}
              size='2xl'
              fixedWidth
            />
          </button> */}
        </div>
      </AnimatePresence>
    </>
  );
};

export default ImageCarousel;
