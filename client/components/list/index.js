import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const List = ({ children, withScroll }) => (
  <ul className={classnames(styles.list, { [styles.scrolling]: withScroll })}>
    {children}
  </ul>
);

export default List;
