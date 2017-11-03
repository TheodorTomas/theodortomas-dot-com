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

import Profile from 'containers/Profile';
import GATracker from 'components/GATracker';

const Wrapper = styled.div`
  // Flex
  display: flex;
  flex-direction: column;
  
  // Sizing
  width: 100%;
  height: 100%;
`;

export const App = () => (
  <Wrapper>
    <Helmet
      defaultTitle="Theodór Tómas | Software Developer"
      meta={[
        { name: 'description', content: 'Theodór Tómas Theodórsson(Theodor Tomas Theodorsson) Professional Software Developer, Software Engineer and Computer Scientist bio and contact information.' },
      ]}
    />
    <GATracker />
    <Switch>
      <Route component={Profile} />
    </Switch>
  </Wrapper>
);

export default App;
