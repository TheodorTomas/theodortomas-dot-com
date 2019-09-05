import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../../src/containers/App'; // import our main App component
const path = require('path');
const fs = require('fs');
export default (req, res) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err); // eslint-disable-line
      return res.status(404).end();
    }
    const sheet = new ServerStyleSheet();
    // render the app as a string
    const html = renderToString(sheet.collectStyles(<App />));
    const css = sheet.getStyleTags();
    // inject the rendered app into our html and send it
    return res.send(
      htmlData
        .replace('<style ssr-styles></style>', css)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`),
    );
  });
};
