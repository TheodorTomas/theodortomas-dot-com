/**
 * Photo
 *
 * Renders an image, enforcing the usage of the alt="" tag.
 * Hides the image while loading.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../containers/App/constants';

const Img = styled.img`
  /* Sizing */
  width: 50%;
  height: auto;
  min-width: 150px;
  min-height: 150px;
  max-width: 350px;
  max-height: 100%;
  margin: auto;
  
  /* Misc */
  border-radius: 50%;
  overflow: hidden;
  
  opacity: 0;
  border: 2px solid;
  border-color: ${COLORS.blueGrey.rgba(0)};
  transition: opacity 0.5s ease-in-out 0.05s, border-color 0.5s ease-in-out 0.05s;
  
  ${({ isShowImg }) => isShowImg ? `
    opacity: 1;
    border-color: ${COLORS.blueGrey.rgba(0.5)};
    ` : ''}
`;

export class Photo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isShowImg: true };
    this.showImg = this.showImg.bind(this);
  }

  componentDidMount() {
    this.loadImage(new Image());
  }

  // need to create new Image to attach onload event since ReactDom.hydrate breaks onLoad in returned <img /> element.
  loadImage(image) {
    image.onload = this.showImg; // eslint-disable-line no-param-reassign
    image.src = this.props.src; // eslint-disable-line no-param-reassign
  }

  showImg() {
    this.setState({ isShowImg: true });
  }

  render() {
    const { src, alt } = this.props;
    const { isShowImg } = this.state;
    return (
      <Img
        src={src}
        alt={alt}
        isShowImg={isShowImg}
      />
    );
  }
}

Photo.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;
