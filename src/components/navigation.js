import React from 'react';
import { Link } from 'gatsby';
import * as styles from './navigation.module.css';
import icon from '../images/Logo White.png';

const Navigation = () => {
  return (
    <div style={{ justifySelf: 'stretch' }}>
      <nav role='navigation' className={styles.container} aria-label='Main'>
        <Link to='/' className={styles.linkLogo}>
          <img className={styles.logo} src={icon} alt='icon' />

          <span className={styles.titleLink}>Danny D'Alessandro Music</span>
        </Link>
        <ul className={styles.navigation}>
          <li className={styles.navItem}>
            <Link to='/' activeClassName='active'>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/listen' activeClassName='active'>
              Listen
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/about' activeClassName='active'>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/events' activeClassName='active'>
              Events
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/contact' activeClassName='active'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
