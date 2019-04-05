import React from 'react';

import styles from './styles.scss';

const Widget = ({ children }) => (
  <div className={styles.widget}>
    {children}
  </div>
);

export default Widget;
