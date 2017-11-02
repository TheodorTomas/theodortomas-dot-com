/**
 * Container around the profile photo
 */

import styled from 'styled-components';
import Img from 'components/Img';

const PhotoContainer = styled(Img)`
  flex-grow: 1;
  border-radius: 50%;
  
  max-width: 25%;
  min-width: 16em;
  height: auto;
  
  margin: auto 0;
  padding: 1em;
  
  overflow: hidden;
`;

export default PhotoContainer;
