import React from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';
import List from '../../components/list';
import ListItem from '../../components/listItem';

const ListCharacterWidget = ({ characters }) => (
  <Widget>
    <List withScroll>
      {characters.map(character => (
        <ListItem key={character.id}>
          <p>{character.name}</p>
        </ListItem>
      ))}
    </List>
  </Widget>
);

const mapStateToProps = state => ({
  characters: state.characters.characters,
});

export default connect(mapStateToProps)(ListCharacterWidget);
