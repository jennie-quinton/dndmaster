import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const VerticalLine = ({ className }) => (
  <div className={classnames(styles.verticalLine, className)} />
);

export default VerticalLine;
