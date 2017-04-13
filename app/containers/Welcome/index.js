/*
 *
 * Welcome
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import PhotoContainer from './PhotoContainer';
import TextContainer from './TextContainer';
import ProfilePhoto from './ProfilePhoto.jpg'
import Img from '../../components/Img';
import Dots from '../../components/Dots';
import Header from './Header';
import Intro from './Intro';

import styled from 'styled-components';

const WelcomeWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  font-family: 'Montserrat', sans-serif;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  text-align: center;

  height: 100vh;
  min-height: 600px;
  min-width: 1200px;
  padding-top: 50px;
`;

export class Welcome extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <WelcomeWrapper>
        <Helmet
          title="Welcome"
          meta={[
            { name: 'description', content: 'Welcome Page' },
          ]}
        />
        <PhotoContainer>
          <Img src={ProfilePhoto} alt="Profile Photo" />
        </PhotoContainer>

        <TextContainer>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          <Intro>
            <FormattedMessage {...messages.intro} />
          </Intro>
        </TextContainer>
        <Dots />
      </WelcomeWrapper>
    );
  }
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Welcome);
