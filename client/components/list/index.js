import React from 'react';

import styles from './styles.scss';

const List = ({ children }) => (
  <div className={styles.list}>
    {children}
  </div>
);

export default List;
