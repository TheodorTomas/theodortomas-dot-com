/**
 * Container around the profile photo
 */

import styled from 'styled-components';
import Img from 'components/Img';
import { COLORS } from 'containers/App/constants';
const { blueGrey } = COLORS; // forcing the green parameter to exist.

const Photo = styled(Img)`
  /* Sizing */
  width: 40%;
  height: auto;
  min-width: 200px;
  min-height: 200px;
  max-width: 90%;
  margin: auto;
  
  /* Misc */
  border: 1px solid ${blueGrey};
  border-radius: 50%;
  overflow: hidden;
`;

export default Photo;
