/**
 * App
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 */
import React from 'react';

// // Import Global Styles
import GlobalStyles from '../../global-styles';

import Profile from '../Profile';
import GATracker from '../GATracker';

export const App = () => ([
  <GlobalStyles key="global-styles" />,
  <GATracker key="ga-tracker" />,
  <Profile key="profile" />,
]);

export default App;
