import React, { Component } from 'react'

export class Video extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.video !== prevProps.video) {
      this.videoRef.src = this.props.video;
    }
  }

  render() {
    return (
        <video className="body-overlay" muted autoPlay loop style={{opacity: 0.3}} ref={ref => this.videoRef = ref}>
            <source src={this.props.video} type="video/mp4"/>
        </video>
    )
  }
}

export default Video
