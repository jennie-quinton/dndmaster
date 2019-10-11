import React from 'react';

import MenuBar from '../menuBar';

import styles from './styles.scss';

const Page = ({ children }) => (
  <div>
    <MenuBar />
    <div className={styles.pageContent}>
      {children}
    </div>
  </div>
);

export default Page;
