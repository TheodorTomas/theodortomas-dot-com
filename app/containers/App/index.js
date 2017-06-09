/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Theodor Tomas | Software Developer"
          defaultTitle="Theodor Tomas | Software Developer"
          meta={[
            { name: 'description', content: 'Professional Software Developer bio, skills and contact information.' },
          ]}
        />
        <Header />
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    );
  }
}
