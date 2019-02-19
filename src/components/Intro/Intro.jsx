import React from 'react';
import _map from 'lodash/map';
import styles from './intro.module.scss';

const Intro = () => {
  const meImg = 'https://res.cloudinary.com/dewd4pral/image/upload/v1549830509/blake-site/bh.jpg';
  const favTech = ['JavaScript', 'React', 'Node', 'Angular', 'SQL', 'PostgreSQL'];
  const techTags = _map(favTech, (tech, index) => (
    <div key={index} className={styles.techTag}>
      {tech}
    </div>
  ));

  return (
    <div className={styles.introWrapper}>
      <div className={styles.imageWrapper}>
        <img src={meImg} alt="Blake Hagen" />
      </div>

      <h1>
        Blake
        <span> Hagen</span>
      </h1>
      <h2>Software Developer</h2>

      <div className={styles.shortIntro}>
        <p>Let's build something awesome&nbsp;together.</p>
      </div>

      <div className={styles.tagContainer}>{techTags}</div>
    </div>
  );
};

export default Intro;
