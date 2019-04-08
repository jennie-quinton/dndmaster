import React from 'react';
import classname from 'classnames';

import styles from './styles.scss';

const Heading = ({ children, level, className }) => {
  const HeadingLevel = `h${level}`;
  return (
    <HeadingLevel className={classname(styles.heading, className)}>
      {children}
    </HeadingLevel>
  );
};

export default Heading;
