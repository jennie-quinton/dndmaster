import React, { Fragment } from 'react';

import styles from './styles.scss';

const Form = ({ children }) => (
  <form className={styles.form}>
    {children}
  </form>
);

export default Form;
