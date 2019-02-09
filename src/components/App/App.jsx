import React from 'react';
import TopBar from '../TopBar';

import styles from './app.module.scss';

const App = () => (
  <div className={styles.appWrapper}>
    <TopBar />
    <div style={{ padding: 40 }}>
     cool app bro!
    </div>
    {/* Footer here... */}
  </div>
);

export default App;
