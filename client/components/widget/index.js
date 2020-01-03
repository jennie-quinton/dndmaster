import React from 'react';
import classnames from 'classnames';

import { Heading, VerticalLine } from '../basics';

import styles from './styles.scss';

const Widget = ({
  title, children, size, centerTitle, minWidth,
}) => (
  <div
    className={classnames(styles.wrapper, styles[size])}
    style={minWidth && { minWidth }}
  >
    <div className={styles.top}>
      <Heading className={centerTitle && styles.centerTitle} level={2}>{title}</Heading>
      <VerticalLine className={styles.divider} />
    </div>
    <div className={styles.children}>
      {children}
    </div>
  </div>
);

export default Widget;
