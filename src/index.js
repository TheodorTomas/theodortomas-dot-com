import React from 'react';
import ReactDOM from 'react-dom';

// import third party packages
import 'cookieconsent/build/cookieconsent.min.css';
import 'cookieconsent/build/cookieconsent.min';
import 'font-awesome/css/font-awesome.min.css';
import 'sanitize.css/sanitize.css';

// import Background canvas animation
import 'BackgroundEffect/BackgroundEffect';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Import Global Styles
import './global-styles';

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
