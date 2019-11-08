import React from 'react';

import ListCharacterWidget from '../listCharacterWidget';
import CreateCharacterWidget from '../createCharacterWidget';
import WidgetsContainer from '../widgetsContainer';

const Campaign = () => (
  <WidgetsContainer>
    <ListCharacterWidget />
    <CreateCharacterWidget />
  </WidgetsContainer>
);

export default Campaign;
