/**
 * Video
 *
 * Renders video element which rewinds to start and replays upon click.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledVideo } from './StyledVideo';

export default class Video extends React.PureComponent {
  static propTypes = {
    vidSrc: PropTypes.string.isRequired,
  };

  state = {
    isClickable: false,
  };

  video = React.createRef();

  componentDidMount() {
    this.handleMount();
  }

  componentWillUnmount() {
    this.handleUnmount();
  }

  rewindVideo = () => {
    if (this.video.current.currentTime <= 0.5) {
      clearInterval(this.intervalRewind);
      this.video.current.addEventListener('ended', this.handleVideoEnding, false);
      this.video.current.play();
    } else if (this.video.current.currentTime <= 1) {
      this.video.current.currentTime += -0.11;
    } else {
      this.video.current.currentTime += -0.33;
    }
  };

  handleVideoEnding = () => {
    this.setState({ isClickable: true });
  };

  handleVideoClick = () => {
    const { isClickable } = this.state;

    if (isClickable) {
      this.setState({ isClickable: false });
      this.rewindVideo();
      this.intervalRewind = setInterval(this.rewindVideo, 66);
    }
  };

  handleMount() {
    if (this.video.current) {
      this.video.current.playbackRate = 2.5;
      this.video.current.addEventListener('ended', this.handleVideoEnding, false);
    }
  }

  handleUnmount() {
    this.video.current.removeEventListener('ended', this.handleVideoEnding);
    clearInterval(this.intervalRewind);
  }

  render() {
    const { vidSrc } = this.props;
    const { isClickable } = this.state;

    return (
      <StyledVideo
        ref={this.video}
        autoPlay
        muted
        title={isClickable ? 'Click me!' : ''}
        isClickable={isClickable}
        onClick={this.handleVideoClick}
      >
        <source src={vidSrc} type="video/mp4" />
      </StyledVideo>
    );
  }
}
