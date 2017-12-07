/**
 * App.react.js
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 *
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Profile from 'containers/Profile';
import GATracker from 'containers/GATracker';

export const App = () => ([
  <Helmet
    key={'app-helmet'}
    defaultTitle="Theodór Tómas | Software Engineer"
    meta={[
      { name: 'description', content: 'Theodór Tómas Theodórsson(Theodor Tomas Theodorsson) Professional Software Engineer, Software Developer and Computer Scientist bio and contact information.' },
    ]}
  />,
  <GATracker key={'app-ga-tracker'} />,
  <Switch key={'app-switch-route'}>
    <Route component={Profile} />
  </Switch>,
]);

export default App;
