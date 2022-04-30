import React from 'react';

import { BgImage } from 'gbimage-bridge';
import * as styles from './gbi-bridged.module.css';
const GbiBridged = function ({ image, ...props }) {
  return (
    <BgImage
      alt="Danny D'Alessandro"
      ariaLabel="Danny D'Alessandro"
      image={image}
      style={props.style ? props.style : null}
      className={props.style ? null : styles.backgroundHeroImage}>
      {props.children}
    </BgImage>
  );
};

export default GbiBridged;
