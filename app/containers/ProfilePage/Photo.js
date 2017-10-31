/**
 * Container around the profile photo
 */

import styled from 'styled-components';
import Img from 'components/Img';

const PhotoContainer = styled(Img)`
  border-radius: 50%;
  
  width: 35%;
  height: auto;
  margin: auto;
  
  overflow: hidden;
`;

export default PhotoContainer;
