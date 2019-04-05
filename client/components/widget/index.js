import React from 'react';
import classnames from 'classnames';

import { Heading, VerticalLine } from '../basics';

import styles from './styles.scss';

const Widget = ({ title, children, size }) => (
  <div className={classnames(styles.wrapper, styles[size])}>
    <div className={styles.top}>
      <Heading level={2}>{title}</Heading>
      <VerticalLine />
    </div>
    {children}
  </div>
);

export default Widget;
