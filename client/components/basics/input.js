/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

const Input = ({
  type = 'text', placeholder, labelText, formName, inline, value, onChange, name,
}) => {
  const inputId = `${formName}-${name}`;

  const renderInput = () => (
    <input
      type={type}
      id={inputId}
      value={value}
      placeholder={placeholder}
      className={inline && styles['input-inline']}
      onChange={onChange}
    />
  );

  return (
    <Fragment>
      {labelText ? (
        <label htmlFor={inputId} className={classnames(styles.label, { [styles['label-inline']]: inline })}>
          {labelText}: {renderInput()}
        </label>
      ) : renderInput()}
    </Fragment>
  );
};

export default Input;
