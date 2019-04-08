import React from 'react';

import Widget from '../../components/widget';
import { Input, Form } from '../../components/basics';

const CreateCharacterWidget = () => (
  <Widget title="Create Character" size="medium">
    <Form>
      <Input placeholder="name" labelText="Name" formName="character-creation" />
      <Input placeholder="race" labelText="Race" formName="character-creation" />
      <Input placeholder="class" labelText="Class" formName="character-creation" />
    </Form>
  </Widget>
);

export default CreateCharacterWidget;
