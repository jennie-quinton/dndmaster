import React from 'react';

import styles from './styles.scss';

const Layout = ({ children, spacing }) => (
  <div style={{
    marginTop: spacing[0],
    marginRight: spacing[1],
    marginBottom: spacing[2],
    marginLeft: spacing[3],
  }}
  >
    {children}
  </div>
);

export default Layout;
