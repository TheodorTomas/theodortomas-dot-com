/**
 * Container around the profile photo
 */

import styled from 'styled-components';
import Img from 'components/Img';

const Photo = styled(Img)`
  /* Sizing */
  width: 50%;
  height: auto;
  min-width: 200px;
  min-height: 200px;
  max-width: 90%;
  margin: auto;
  
  /* Misc */
  border: 1px solid rgba(152, 163, 177, 0.5);
  border-radius: 50%;
  overflow: hidden;
`;

export default Photo;
