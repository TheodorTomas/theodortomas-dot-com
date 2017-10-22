/**
 * Container around the profile photo
 */

import styled from 'styled-components';
import Img from 'components/Img';

const PhotoContainer = styled(Img)`
  transform: scale(0.7, 0.7) translateZ(0);
  align-self: center;
  border-radius: 250px;
  width: 450px;
  height: 450px;
  overflow: hidden;
`;

export default PhotoContainer;
