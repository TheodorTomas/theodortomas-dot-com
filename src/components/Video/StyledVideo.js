import styled from 'styled-components';
import { COLORS } from '../../containers/App/theme';

export const StyledVideo = styled.video`
  /* Sizing */
  width: 150px;
  height: 150px;
  margin: auto;
  
  /* Misc */
  background-color: ${COLORS.videoBgColor.hex};
  overflow: hidden;
  transition: border-color 0.25s ease-in-out, transform 0.25s ease-in-out;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${COLORS.darkGrey.rgba(0.5)};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  ${({ isClickable }) => (
    isClickable
      ? `
        &:hover {
          transform: scale(1.01);
          cursor: pointer;
          border-color: ${COLORS.blueGrey.rgba(0.5)};
        }
        `
      : ''
  )}
`;
