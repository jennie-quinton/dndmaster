import React from 'react';

import { Heading, VerticalLine } from '../basics';

import styles from './styles.scss';

const Widget = ({ title, children }) => (
  <div className={styles.wrapper}>
    <Heading level={2}>{title}</Heading>
    <VerticalLine />
    {children}
  </div>
);

export default Widget;
