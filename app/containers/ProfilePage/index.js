/*
 *
 * ProfilePage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import H2 from 'components/H2';
import IconBar from 'components/IconBar';

import Wrapper from './Wrapper';
import Photo from './Photo';
import Container from './Container';
import ProfilePhoto from './ProfilePhoto.jpg';
import messages from './messages';

const Profile = () => (
  <Wrapper>
    <Photo src={ProfilePhoto} alt="Profile Photo" />
    <Container>
      <H1>
        <FormattedMessage {...messages.hello} />
      </H1>
      <H2>
        <FormattedMessage {...messages.intro} />
      </H2>
      <IconBar
        icons={[
          { href: 'https://linkedin.com/in/TheodorTomas', title: 'Linkedin', className: 'fa fa-linkedin', hoverColor: '#0077b5' },
          { href: 'https://github.com/TheodorTomas', title: 'Github', className: 'fa fa-github', hoverColor: '#6cc644' },
          { href: 'https://twitter.com/TheodorTomas', title: 'Twitter', className: 'fa fa-twitter', hoverColor: '#1da1f2' },
        ]}
      />
    </Container>
  </Wrapper>
);

export default Profile;
