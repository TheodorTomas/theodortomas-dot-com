/**
 * Container around the profile photo
 */

import styled from 'styled-components';

const PhotoContainer = styled.div`
  transform: scale(0.8, 0.8);
  -ms-transform: scale(0.8, 0.8);
  -webkit-transform: scale(0.8, 0.8);

  align-self: center;

  border-radius: 250px;
  width: 450px;
  height: 450px;
  overflow:hidden;
`;

export default PhotoContainer;
