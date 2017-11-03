/**
 * Profile container, containing what data should be used with which components.
 */
import React from 'react';
import styled from 'styled-components';
import IconBar from 'components/IconBar';
import Photo from './Photo';
import Container from './Container';
import Text from './Text';
import Bio from './Bio';
import messages from './messages';
import photo from './photo.jpg';

const Wrapper = styled.article`
  // Flex-box
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  
  // Sizing
  width: 60vw;
  min-width: 21em;
  max-width: 90vw;
  min-height: 50vh;
  padding: 2.5em;
  margin: auto;
  
  // Misc
  z-index: 1;
  background-color: rgba(106, 106, 106, 0.9);
  border: 1px solid #95A3B3;
  border-radius: 0.125em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const bio = [
  { type: 'Frontend', items: ['React', 'Angular'] },
  { type: 'Backend', items: ['Node'] },
  { type: 'Mobile', items: ['Ionic'] },
];

const icons = [
  { href: 'https://linkedin.com/in/TheodorTomas', title: 'Linkedin', className: 'fa fa-linkedin', hoverColor: '#0077b5' },
  { href: 'https://github.com/TheodorTomas', title: 'Github', className: 'fa fa-github', hoverColor: '#6cc644' },
  { href: 'https://twitter.com/TheodorTomas', title: 'Twitter', className: 'fa fa-twitter', hoverColor: '#1da1f2' },
];

const Profile = () => (
  <Wrapper>
    <Photo src={photo} alt="Profile Photo" />
    <Container>
      <Text h1={messages.hello} h2={messages.intro} h3={messages.title} />
      <Bio bio={bio} />
      <IconBar icons={icons} />
    </Container>
  </Wrapper>
);

export default Profile;
