import React, { Component } from 'react'

import CreateCharacterWidget from 'containers/createCharacterWidget';
import MenuBar from 'components/menuBar';

class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar/>
        <CreateCharacterWidget />
      </div>
    )
  }
}

export default Home