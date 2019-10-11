import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const WidgetsContainer = ({ children, center }) => (
  <div className={classnames(styles.container, { [styles.center]: center })}>
    {children}
  </div>
);

export default WidgetsContainer;
