/**
 * App
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 *
 */
import React from 'react';
import Profile from 'containers/Profile';
import GATracker from 'containers/GATracker';

export const App = () => (
  <div
    style={{
      display: 'flex',
      alignContent: 'center',
      minHeight: '100vh',
      padding: '4px 0', // this also hides vertical scrollbar on initial load.
      overflow: 'auto',
    }}
  >
    <GATracker key="ga-tracker" />
    <Profile key="profile" />
  </div>
);

export default App;
