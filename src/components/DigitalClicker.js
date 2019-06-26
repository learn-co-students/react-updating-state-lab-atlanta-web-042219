// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    addOne = () => {
        const oneMore = this.state.timesClicked + 1
        this.setState({timesClicked: oneMore})
    }

    render() {
        return (
            <button onClick={this.addOne}>{this.state.timesClicked}</button>
        )
    }
}
