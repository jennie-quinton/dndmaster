import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const List = ({ children, withScroll }) => (
  <ul className={classnames(styles.wrapper, { [styles.scrolling]: withScroll })}>
    {children}
  </ul>
);

export default List;
