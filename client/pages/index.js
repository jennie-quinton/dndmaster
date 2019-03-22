import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateCharacterWidget from '../containers/createCharacterWidget';
import MenuBar from '../components/menuBar';
import { addCharacter } from '../actions/characterActions';

class Home extends Component {
  componentDidMount() {
    this.props.getInitialCharacter();
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div>
          <CreateCharacterWidget />
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  getInitialCharacter: () => dispatch(addCharacter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
