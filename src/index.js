import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// import third party packages
import 'cookieconsent/build/cookieconsent.min.css';
import 'cookieconsent/build/cookieconsent.min';
import 'sanitize.css/sanitize.css';
import FontFaceObserver from 'fontfaceobserver';

// import Background canvas animation
import 'BackgroundEffect/BackgroundEffect';

// Import Global Styles
import './global-styles';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const fontLobster = new FontFaceObserver('Lobster');
const fontLato = new FontFaceObserver('Lato');

Promise.all([fontLobster.load(), fontLato.load()]).then(() => {
  document.body.classList.add('fontLoaded');
});

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
