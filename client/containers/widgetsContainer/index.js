import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const WidgetsContainer = ({ children, center, direction }) => (
  <div className={classnames(
    styles.container,
    styles[direction],
    {
      [styles.columnCenter]: center && direction === 'column',
      [styles.rowCenter]: center && direction !== 'column',
    },
  )}
  >
    {children.map((child, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={`widget-${index}`}>
        {child}
      </div>
    ))}
  </div>
);

export default WidgetsContainer;
