import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCharacter } from '../actions/characterActions';

import CreateCharacterWidget from 'containers/createCharacterWidget';
import MenuBar from 'components/menuBar';

class Home extends Component {
  componentDidMount() {
    this.props.getInitialCharacter();
  }

  render() {
    return (
      <div>
        <MenuBar/>
        <CreateCharacterWidget />
      </div>
    )
  }
}

const mapStateToProps = (state ) => {
  return {};
}

const mapDispatchToProps = (dispatch)=> {
  return {
    getInitialCharacter: () => dispatch(addCharacter()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)