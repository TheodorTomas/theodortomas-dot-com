/**
 * App.react.js
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 *
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Profile from 'containers/Profile';
import GATracker from 'containers/GATracker';

const Wrapper = styled.div`
  /* Flex */
  display: flex;
  
  /* Sizing */
  height: 100vh;
`;

export const App = () => (
  <Wrapper>
    <Helmet
      defaultTitle="Theodór Tómas | Software Engineer"
      meta={[
        { name: 'description', content: 'Theodór Tómas Theodórsson(Theodor Tomas Theodorsson) Professional Software Engineer, Software Developer and Computer Scientist bio and contact information.' },
      ]}
    />
    <GATracker />
    <Switch>
      <Route component={Profile} />
    </Switch>
  </Wrapper>
);

export default App;
