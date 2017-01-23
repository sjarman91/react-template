import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleUpdate } from '../redux/example';

/* Think of this Home component as your main content. If you add new routes,
their content will replace what you see here (when you navigate to them).  */

class Home extends Component {

  render() {
    const { update, example } = this.props;

    return (
      <div>
        <h2>Template Ready.</h2>
        <p>Add new pages using react-router, change the Redux state, and make this app your own!</p>
        <p>CURRENT STATE: { example }</p>
        <button onClick={update}>Update</button>
      </div>
    );
  }
}

const mapStateToProps = ({ example }) => ({ example });

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(exampleUpdate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
