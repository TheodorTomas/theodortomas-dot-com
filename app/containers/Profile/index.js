/*
 *
 * Welcome
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';

import Wrapper from './Wrapper';
import Photo from './Photo';
import TextContainer from './TextContainer';
import ProfilePhoto from './ProfilePhoto.jpg';
import Intro from './Intro';
import messages from './messages';

const Profile = () => (
  <Wrapper>
    <Photo src={ProfilePhoto} alt="Profile Photo" />

    <TextContainer>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Intro>
        <FormattedMessage {...messages.intro} />
      </Intro>
    </TextContainer>
  </Wrapper>
);

export default Profile;
