import React, { Component } from 'react';
import { connect } from 'react-redux';

import Widgets from '../containers/widgets';
import Login from '../containers/login';
import MenuBar from '../components/menuBar';
import { getUser } from '../actions/authActions';

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user } = this.props;

    if (user === 'Unauthorized') {
      return <Login />;
    }

    if (user && user.name) {
      return (
        <div>
          <MenuBar />
          <Widgets />
        </div>
      );
    }

    return <p>Loading</p>;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
