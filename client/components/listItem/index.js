import React from 'react';

import styles from './styles.scss';

const ListItem = ({ children }) => (
  <li className={styles['list-item']}>
    {children}
  </li>
);

export default ListItem;
