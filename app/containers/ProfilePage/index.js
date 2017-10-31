/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import H2 from 'components/H2';

import Wrapper from './Wrapper';
import Photo from './Photo';
import TextContainer from './TextContainer';
import ProfilePhoto from './ProfilePhoto.jpg';
import messages from './messages';

const Profile = () => (
  <Wrapper>
    <Photo src={ProfilePhoto} alt="Profile Photo" />
    <TextContainer>
      <H1>
        <FormattedMessage {...messages.hello} />
      </H1>
      <H2>
        <FormattedMessage {...messages.intro} />
      </H2>
    </TextContainer>
  </Wrapper>
);

export default Profile;
