/**
 * App
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 */
import React from 'react';

// // Import Global Styles
import '../../global-styles';

import Profile from '../Profile';
import GATracker from '../GATracker';

export const App = () => ([
  <GATracker key="ga-tracker" />,
  <Profile key="profile" />,
]);

export default App;
