import React from 'react';

import styles from './styles.scss';

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default Button;
