import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    let newTimes = this.state.timesClicked+1
    this.setState({
      timesClicked: newTimes
    })
  }
  // handleClick = () => {
  //     this.setState(prevState => ({
  //       timesClicked: prevState.timesClicked+1
  //     }))
  //   }

  render() {
      return (
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      );
    }
  }

  export default DigitalClicker;
