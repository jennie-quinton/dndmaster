import React from 'react';

import ListCharacterWidget from '../../containers/listCharacterWidget';
import CreateCharacterWidget from '../../containers/createCharacterWidget';
import WidgetsContainer from '../../containers/widgetsContainer';

const CampaignPage = () => (
  <WidgetsContainer>
    <ListCharacterWidget />
    <CreateCharacterWidget />
  </WidgetsContainer>
);

export default CampaignPage;
