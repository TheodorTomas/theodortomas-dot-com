/**
 * Profile container, containing what data should be used with which components.
 */
import React from 'react';
import Styled from 'styled-components';
import { COLORS } from 'containers/App/constants';
import IconBar from 'components/IconBar';
import Photo from './Photo';
import Container from './Container';
import Text from './Text';
import Bio from './Bio';
import EmailLink from './EmailLink';
import messages from './messages';
import photo from './photo.jpg';
const { blueGrey } = COLORS; // forcing the green parameter to exist.

const Wrapper = Styled.article`
  /* Flex-box */
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  
  /* Sizing */
  width: 60vw;
  min-width: 21em;
  max-width: 90vw;
  min-height: 50vh;
  padding: 2.5em;
  margin: auto;
  
  /* Misc */
  z-index: 1;
  background-color: rgba(106, 106, 106, 0.9);
  border: 1px solid ${blueGrey};
  border-radius: 0.125em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const bio = [
  { title: 'Frontend', items: ['React', 'Angular'] },
  { title: 'Backend', items: ['Node'] },
  { title: 'Mobile', items: ['Ionic'] },
];

const icons = [
  { href: 'https://linkedin.com/in/TheodorTomas', title: 'www.linkedin.com/TheodorTomas', className: 'fa fa-linkedin', hoverColor: '#0077b5' },
  { href: 'https://github.com/TheodorTomas', title: 'www.github.com/TheodorTomas', className: 'fa fa-github', hoverColor: '#6cc644' },
  { href: 'https://twitter.com/TheodorTomas', title: 'www.twitter.com/TheodorTomas', className: 'fa fa-twitter', hoverColor: '#1da1f2' },
];

const contactInfo = {
  href: 'mailto:theodortomas@gmail.com',
  title: 'Contact me',
  text: 'theodortomas@gmail.com',
};

const Profile = () => (
  <Wrapper>
    <Photo src={photo} alt="Profile Photo" />
    <Container>
      <Text h1={messages.h1} h2={messages.h2} title="Click me" />
      <Bio bio={bio} />
      <IconBar icons={icons} />
      <EmailLink {...contactInfo} />
    </Container>
  </Wrapper>
);

export default Profile;
