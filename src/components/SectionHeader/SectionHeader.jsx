import React from 'react';
import PropTypes from 'prop-types';

import styles from './sectionHeader.module.scss';

const SectionHeader = ({ name }) => <div className={styles.sectionHeaderWrapper}>{name}</div>;

SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SectionHeader;
