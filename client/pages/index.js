import React, { Component } from 'react';
import { connect } from 'react-redux';

import Widgets from '../containers/widgets';
import MenuBar from '../components/menuBar';
import { getCharacters } from '../actions/characterActions';

class Home extends Component {
  componentDidMount() {
    this.props.getInitialCharacters();
  }

  render() {
    return (
      <div>
        <MenuBar />
        <Widgets />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getInitialCharacters: () => dispatch(getCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
