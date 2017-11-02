/*
 *
 * ProfilePage
 *
 */
import React from 'react';
import styled from 'styled-components';
import IconBar from 'components/IconBar';
import Photo from './Photo';
import Container from './Container';
import Welcome from './Welcome';
import ProfilePhoto from './ProfilePhoto.jpg';
import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;

  height: 100vh;
  width: 100vw;
  
  z-index: 1;
`;

const ProfilePage = () => (
  <Wrapper>
    <Photo src={ProfilePhoto} alt="Profile Photo" />
    <Container>
      <Welcome h1={messages.hello} h2={messages.intro} />
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

export default ProfilePage;
