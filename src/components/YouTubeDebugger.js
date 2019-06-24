import React, { Component } from 'react';

export default class YoutubeDebugger extends Component {

  constructor(){
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
    }

  handleYClick = () => {
    this.setState({
      settings: {...this.state.settings,
      bitrate: 12
      }
    })
  }
  handleXClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.handleYClick}>Butt 1</button>
        <button className='resolution' onClick={this.handleXClick}>Butt 2</button>
      </div>
    )
  }
}
