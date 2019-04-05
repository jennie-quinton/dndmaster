import React from 'react';

import ListCharacterWidget from '../listCharacterWidget';
import styles from './styles.scss';

const Widgets = () => (
  <div className={styles['widget-container']}>
    <ListCharacterWidget />
  </div>
);

export default Widgets;
