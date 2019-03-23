import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// import third party packages
import 'cookieconsent/build/cookieconsent.min.css';
import 'cookieconsent/build/cookieconsent.min';
import 'sanitize.css/sanitize.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
