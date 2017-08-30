import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

class TestButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      button: [
        'left',
        'right'
      ]
    };
  }

  render() {
    const buttons = this.state.button.map((btn) => {
      return <Button onClick={() => this.props.buttonClicked(btn)}>{btn}</Button>
    });

    return (
      <ButtonGroup>
        {buttons}
      </ButtonGroup>
    )
  }
}

export default TestButton;