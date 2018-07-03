import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// import third party packages
import 'cookieconsent/build/cookieconsent.min.css';
import 'cookieconsent/build/cookieconsent.min';
import 'sanitize.css/sanitize.css';
import FontFaceObserver from 'fontfaceobserver';

// Background canvas animation
import './BackgroundEffect/BackgroundEffect';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const fontLobster = new FontFaceObserver('Lobster');
const fontLato = new FontFaceObserver('Lato');

Promise.all([fontLobster.load(), fontLato.load()]).then(() => {
  document.body.classList.add('fontLoaded');
});

ReactDOM.hydrate(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
