import React from 'react';

import styles from './styles.scss';

const WidgetsContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default WidgetsContainer;
