/**
 * App
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 *
 */
import React from 'react';
import Profile from 'containers/Profile';
import GATracker from 'containers/GATracker';

export const App = () => [
  <GATracker key="ga-tracker" />,
  <Profile key="profile" />,
];

export default App;
