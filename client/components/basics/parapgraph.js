import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Paragraph = ({ children, className }) => (
  <p className={classnames(styles.paragraph, className)}>
    {children}
  </p>
);

export default (Paragraph);
