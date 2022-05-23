import React from 'react';
import * as styles from './internal-nav-buttons.module.css';
import { navigate } from 'gatsby';
const NavButton = ({ text, page }) => {
  return (
    <button
      onClick={() => {
        navigate(page);
      }}
      className={styles.navButton}>
      {text}
    </button>
  );
};

export default NavButton;
