import React from 'react';
import { Heading } from '../../components/basics';

import styles from './styles.scss';

const pageNotFound = () => (
  <div className={styles.page}>
    <Heading level={1}>Page not found</Heading>
  </div>
);


export default pageNotFound;
