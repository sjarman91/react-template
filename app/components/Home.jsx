import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleUpdate } from '../ducks/example';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { example, update, clear } = this.props

    return (
      <div>
        <h2>Here is the Home Page!</h2>
        <p>Add new pages using react-router, change the Redux state, and make this app your own!</p>
        <p>CURRENT STATE: { example }</p>
        <button onClick={this.props.update}>Update</button>
      </div>
    )
  }
}

const mapStateToProps = ({ example }) => ({ example })

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(exampleUpdate())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
