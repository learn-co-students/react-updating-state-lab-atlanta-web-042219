import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {timesClicked: 0}
  }

  handleClick = () => {
    let newValue = parseInt(this.state.timesClicked, 10) + 1;
    return this.setState({timesClicked: newValue});
  }

  render() { 
    return (
      <button onClick={this.handleClick} label={this.state.timesClicked}>
        {this.state.timesClicked}
      </button>
    );
  }
}
 
export default DigitalClicker;