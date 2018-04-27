/**
 * App
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 *
 */
import React from 'react';
import styled from 'styled-components';
import Profile from 'containers/Profile';
import GATracker from 'containers/GATracker';

const Wrapper = styled.div`
  /* Flex */
  display: flex;
  
  /* Sizing */
  min-height: 100vh;
  padding: 2em 0;
`;

export const App = () => (
  <Wrapper>
    <GATracker />
    <Profile />
  </Wrapper>
);

export default App;
