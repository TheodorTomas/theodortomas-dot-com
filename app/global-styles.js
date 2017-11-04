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
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Raleway', sans-serif;
  }
  
  h1,
  h1 {
    font-family: 'Lobster', cursive;
  }
`;
