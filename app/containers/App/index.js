/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import ProfilePage from 'containers/ProfilePage';
import NavBar from 'components/NavBar';
import GATracker from 'components/GATracker';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const App = () => (
  <Wrapper>
    <Helmet
      defaultTitle="Theodor Tomas | Software Developer"
      meta={[
        { name: 'description', content: 'Professional Software Developer bio, skills and contact information.' },
      ]}
    />
    <GATracker />
    <NavBar />
    <Switch>
      <Route component={ProfilePage} />
    </Switch>
  </Wrapper>
);

export default App;
