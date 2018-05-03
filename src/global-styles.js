import { injectGlobal } from 'styled-components';
import { COLORS } from 'containers/App/constants';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 1em;
  }
  
  body {
    background-color: ${COLORS.darkGrey.rgba(0.95)};
    font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
    text-align: center;

    h1 {
      font-family: 'Times New Roman', Times, serif;
      font-weight: bolder;
    }
    
    h2 {
      font-weight: normal;
    }
  }
  
  body.fontLoaded {
    h1 {
      font-family: Lobster, Helvetica, 'Helvetica Neue', Arial, sans-serif;
    }
    
    h1,
    h2 {
      font-weight: normal;
    }
    
    &,
    .cc-window {
      font-family: Lato, Helvetica, 'Helvetica Neue', Arial, sans-serif;
    }
  }
  
  span,
  a,
  .cc-compliance a {
    transition: font 0.5s ease-in-out;
    
    @media only screen and (max-width: 450px) {
      font-size: 80%;
    }
  }
  
  #root {
    display: flex;
    min-width: 100%;
    min-height: 100%;
  }
  
  /* ----------- Cookie consent popup ----------- */
  .cc-window {
    display: flex;
    justify-content: space-between;
    font-size: 1em !important;
  }
  
  .cc-compliance {
    font-size: 1em !important;
  }
  
  .cc-compliance a,
  .cc-compliance a:visited {
    transition: background-color 0.5s ease-in-out;
    color: ${COLORS.lightGrey.hex};
  }
  
  .cc-compliance a:hover,
  .cc-compliance a:active {
    cursor: pointer;
    background-color: ${COLORS.green.hex} !important;
  }
  
  .cc-link {
    font-size: 1em !important;
    transition: color 0.5s ease-in-out;
    cursor: pointer;
    color: ${COLORS.blueGrey.hex} !important;
  }
  
  .cc-link:visited,
  .cc-link:hover,
  .cc-link:active {
    color: ${COLORS.green.hex} !important;
  }
`;
