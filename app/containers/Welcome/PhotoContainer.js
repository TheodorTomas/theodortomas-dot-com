/**
 * Container around the profile photo
 */

import styled from 'styled-components';

const PhotoContainer = styled.div`
  transform: scale(0.7, 0.7);
  -ms-transform: scale(0.7, 0.7);
  -webkit-transform: scale(0.7, 0.7);

  align-self: center;

  border-radius: 250px;
  width: 450px;
  height: 450px;
  overflow:hidden;
`;

export default PhotoContainer;
