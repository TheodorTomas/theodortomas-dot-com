import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    background-color: #4a4a4a;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
  }
  
  h1,
  h1 {
    font-family: 'Lobster', cursive;
  }
  
  .cc-window {
    font-family: 'Raleway', sans-serif !important;
  }
  
  .cc-compliance a,
  .cc-compliance a:link,
  .cc-compliance a:visited,
  .cc-compliance a:hover,
  .cc-compliance a:active {
    transition: color 0.25s ease-in-out;
    cursor: pointer;
    color: #78c8b4;
    background-color: #95a3b3 !important;
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
