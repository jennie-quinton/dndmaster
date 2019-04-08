import React from 'react';

import ListCharacterWidget from '../listCharacterWidget';
import CreateCharacterWidget from '../createCharacterWidget';
import styles from './styles.scss';

const Widgets = () => (
  <div className={styles.container}>
    <ListCharacterWidget />
    <CreateCharacterWidget />
  </div>
);

export default Widgets;
