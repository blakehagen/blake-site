import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import styles from './topBar.module.scss';

const TopBar = () => (
  <header className={styles.headerWrapper}>
    <div className={styles.navContainer}>
      <div className={styles.initials}>
        B<span>H</span>
      </div>
      <div className={styles.icon}>
        <a href="https://github.com/blakehagen" rel="noopener noreferrer" target="_blank">
          <FaGithub size={17} />
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://linkedin.com/in/blakehagen" rel="noopener noreferrer" target="_blank">
          <FaLinkedinIn size={17} />
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://twitter.com/blakehagen" rel="noopener noreferrer" target="_blank">
          <FaTwitter size={17} />
        </a>
      </div>
    </div>
  </header>
);

export default TopBar;
