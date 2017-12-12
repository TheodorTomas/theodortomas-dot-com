import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body,
  #app {
    background-color: rgba(74, 74, 74, 0.5);
  }

  #app {
    overflow: scroll;
  }
  
  .cc-window {
    font-family: 'Lato', sans-serif !important;
  }
  
  .cc-compliance a,
  .cc-compliance a:link,
  .cc-compliance a:visited {
    transition: background-color 0.25s ease-in-out;
    color: #d3d3d3;
  }
  .cc-compliance a:hover,
  .cc-compliance a:active {
    cursor: pointer;
    background-color: #78c8b4 !important;
  }
  
  .cc-link,
  .cc-link:link,
  .cc-link:visited {
    transition: color 0.25s ease-in-out;
    cursor: pointer;
    color: #95a3b3 !important;
  }
  
  .cc-link:hover,
  .cc-link:active {
    color: #78c8b4 !important;
  }
`;
