import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import * as styles from './image-carousel.module.css';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  // exit: (direction) => {
  //   return {
  //     zIndex: 0,
  //     x: direction < 0 ? 1000 : -1000,
  //     opacity: 0,
  //   };
  // },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ImageCarousel = ({ cloudinaryImages }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, cloudinaryImages.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div className={styles.animatedDiv}>
          <div className={styles.imageWrapper}>
            <button className={styles.prev} onClick={() => paginate(-1)}>
              {'‣'}
            </button>
            <motion.img
              className={styles.gatsbyImg}
              key={page}
              src={cloudinaryImages[imageIndex].secure_url}
              custom={direction}
              variants={variants}
              // initial='enter'
              // animate='center'
              // exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
            <button className={styles.next} onClick={() => paginate(1)}>
              {'‣'}
            </button>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default ImageCarousel;
