import React from 'react';
import TopBar from '../TopBar';
import Intro from '../Intro';
import SectionHeader from '../SectionHeader';

import styles from './app.module.scss';

const App = () => (
  <div className={styles.appWrapper}>
    <TopBar />
    <div>
      <Intro />
      <SectionHeader name="About Me" />
    </div>
    {/* Footer here... */}
  </div>
);

export default App;
