import React from 'react';

import { Paragraph, Heading } from '../basics';

import styles from './styles.scss';

const Character = ({ name, attributes }) => (
  <div>
    <Heading className={styles.name} level={3}>{name}</Heading>
    {attributes.map(attribute => (
      <Paragraph key={attribute.name} className={styles.attribute}>
        {attribute.name}: {attribute.value}
      </Paragraph>
    ))}
  </div>
);

export default (Character);
