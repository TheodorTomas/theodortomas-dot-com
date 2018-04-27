import { injectGlobal } from 'styled-components';
import { COLORS } from 'containers/App/constants';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body,
  #app {
    background-color: ${COLORS.darkGrey.rgba(0.75)};
  }
  
  .cc-window {
    font-family: 'Lato', sans-serif !important;
  }
  
  .cc-compliance a,
  .cc-compliance a:link,
  .cc-compliance a:visited {
    transition: background-color 0.25s ease-in-out;
    color: ${COLORS.lightGrey.hex};
  }
  
  .cc-compliance a:hover,
  .cc-compliance a:active {
    cursor: pointer;
    background-color: ${COLORS.green.hex} !important;
  }
  
  .cc-link,
  .cc-link:link,
  .cc-link:visited {
    transition: color 0.25s ease-in-out;
    cursor: pointer;
    color: ${COLORS.blueGrey.hex} !important;
  }
  
  .cc-link:hover,
  .cc-link:active {
    color: ${COLORS.green.hex} !important;
  }
`;
