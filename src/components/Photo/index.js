/**
 *
 * Photo
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from 'containers/App/constants';

const Img = styled.img`
  /* Sizing */
  width: 50%;
  height: auto;
  min-width: 150px;
  max-width: 350px;
  margin: auto;
  
  /* Misc */
  border: 1px solid ${COLORS.blueGrey.rgba(0.5)};
  border-radius: 50%;
  overflow: hidden;
  
  transition: opacity 0.5s ease-in-out;
  
  opacity: 0;
`;

export const showImg = (el) => { el.target.style.opacity = 1; }; // eslint-disable-line no-param-reassign

const Photo = ({ src, alt }) => (
  <Img
    src={src}
    alt={alt}
    onLoad={showImg}
  />
);

Photo.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;
