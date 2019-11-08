/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

const Input = ({
  type = 'text', placeholder, labelText, formName, inline, value, onChange, name, ariaLabel, fullWidth, noWrap,
}) => {
  const inputId = `${formName}-${name}`;

  const renderInput = () => (
    <input
      aria-label={ariaLabel}
      type={type}
      id={inputId}
      value={value}
      placeholder={placeholder}
      className={classnames(styles.input, {
        [styles.inputInline]: inline,
        [styles.fullWidth]: fullWidth,
      })}
      onChange={onChange}
    />
  );

  return (
    <div className={inline && styles.rowInline}>
      {labelText && (
        <label
          htmlFor={inputId}
          className={classnames(styles.label, {
            [styles.labelInline]: inline,
            [styles.noWrap]: noWrap,
          })}
        >
          {labelText}
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default Input;
