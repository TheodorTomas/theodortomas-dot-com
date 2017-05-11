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

import WelcomeWrapper from './WelcomeWrapper';
import PhotoContainer from './PhotoContainer';
import TextContainer from './TextContainer';
import ProfilePhoto from './ProfilePhoto.jpg';
import Img from '../../components/Img';
import Dots from '../../components/Dots';
import Header from './Header';
import Intro from './Intro';

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
