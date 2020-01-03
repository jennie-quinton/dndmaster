import React from 'react';

import Widget from '../../components/widget';
import {
  Input, Form, Layout, Button,
} from '../../components/basics';
import styles from './styles.scss';

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
        <Input placeholder="Race" labelText="Race" formName="character-creation" inline fullWidth />
      </Layout>
      <Layout spacing={['8px', 0, 0, 0]}>
        <Input placeholder="Class" labelText="Class" formName="character-creation" inline fullWidth />
      </Layout>
      <Layout className={styles.right} spacing={['16px', 0, 0, 0]}>
        <Button> Create</Button>
      </Layout>
    </Form>
  </Widget>
);

export default CreateCharacterWidget;
