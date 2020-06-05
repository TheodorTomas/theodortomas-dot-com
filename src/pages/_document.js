import React from 'react';
import Document, { Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Head from './Head';
import { BACKGROUND_EFFECT, CANVAS_ID, EASE_PACK, TWEEN_LITE } from '../constants';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <Html>
        <Head />
        {styleTags}
        <body>
          <canvas id={CANVAS_ID} />
          <Main />
          <NextScript />

          <script src={EASE_PACK} defer />
          <script src={TWEEN_LITE} defer />

          <script src={BACKGROUND_EFFECT} defer />
        </body>
      </Html>
    );
  }
}
