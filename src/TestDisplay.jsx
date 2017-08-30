import React, { Component } from 'react';
import TestButton from './TestButton';
import * as clickedAction from './actions/clicked';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TestDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Which button is checked? (Redux test)</h2>
        <TestButton buttonClicked={this.props.actions.clicked}/>
        <div>{this.props.display} is checked</div>
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  return {
    display: state.clicked[state.clicked.length - 1]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clickedAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDisplay);