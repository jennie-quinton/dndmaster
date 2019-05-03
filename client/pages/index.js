import React, { Component } from 'react';
import { connect } from 'react-redux';

import Widgets from '../containers/widgets';
import MenuBar from '../components/menuBar';
import { getUser } from '../actions/authActions';

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
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
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
