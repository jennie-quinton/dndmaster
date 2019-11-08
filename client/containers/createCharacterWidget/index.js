import React from 'react';

import Widget from '../../components/widget';
import { Input, Form, Layout } from '../../components/basics';

const CreateCharacterWidget = () => (
  <Widget title="Create Character" centerTitle>
    <Form>
      <Layout spacing={['8px', 0, 0, 0]}>
        <Input placeholder="Player Name" labelText="Player Name" formName="character-creation" inline fullWidth noWrap />
      </Layout>
      <Layout spacing={['8px', 0, 0, 0]}>
        <Input placeholder="Name" labelText="Name" formName="character-creation" inline fullWidth />
      </Layout>
      <Layout spacing={['8px', 0, 0, 0]}>
        <Input placeholder="race" labelText="Race" formName="character-creation" inline fullWidth />
      </Layout>
      <Layout spacing={['8px', 0, 0, 0]}>
        <Input placeholder="Class" labelText="Class" formName="character-creation" inline fullWidth />
      </Layout>
    </Form>
  </Widget>
);

export default CreateCharacterWidget;
