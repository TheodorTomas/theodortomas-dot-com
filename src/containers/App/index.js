/**
 * App
 *
 * Returns an array of components.
 */
import React from 'react';
import Profile from '../Profile';
import GATracker from '../GATracker';
import GlobalStyles from '../../global-styles';

export const App = () => [
  <GlobalStyles key="global-styles" />,
  <GATracker key="ga-tracker" />,
  <Profile key="profile" />,
];

export default App;
