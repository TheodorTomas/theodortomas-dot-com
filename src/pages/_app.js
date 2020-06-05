/**
 * App
 *
 * Returns an array of components.
 */
import 'sanitize.css';
import React from 'react';

import Profile from './index';
import useGATracker from '../hooks/useGATracker';
import GlobalStyles from '../global-styles';
import useCookieConsent from '../hooks/useCookieConsent';

export default () => {
  useGATracker();
  useCookieConsent();

  return (
    <>
      <GlobalStyles />
      <Profile />
    </>
  );
};
