import React, { Fragment } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

const Input = ({
  type = 'text', placeholder, labelText, formName, inline, value, onChange,
}) => {
  const inputId = `${formName}-${placeholder}`;
  return (
    <Fragment>
      {labelText ? (
        <label htmlFor={inputId} className={classnames(styles.label, { [styles['label-inline']]: inline })}>
          {labelText}: <input type={type} id={inputId} placeholder={placeholder} />
        </label>
      ) : (
        <input
          type={type}
          id={inputId}
          value={value}
          placeholder={placeholder}
          className={inline && styles['input-inline']}
          onChange={onChange}
        />
      )}
    </Fragment>
  );
};

export default Input;
