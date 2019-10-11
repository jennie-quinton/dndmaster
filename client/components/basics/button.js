import React from 'react';

import styles from './styles.scss';

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
