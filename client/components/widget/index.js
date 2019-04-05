import React from 'react';

import { Heading, VerticalLine } from '../basics';

import styles from './styles.scss';

const Widget = ({ title, children }) => (
  <div className={styles.wrapper}>
    <div className={styles.top}>
      <Heading level={2}>{title}</Heading>
      <VerticalLine />
    </div>
    {children}
  </div>
);

export default Widget;
