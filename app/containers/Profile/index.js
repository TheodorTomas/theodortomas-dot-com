/**
 * Profile container, containing what data should be used with which components.
 */
import React from 'react';
import Styled from 'styled-components';
import { COLORS } from 'containers/App/constants';
import IconBar from 'components/IconBar';
import Bio from 'components/Bio';
import Header from 'components/Header';
import EmailLink from 'components/EmailLink';
import Photo from './Photo';
import Container from './Container';
import messages from './messages';
import photo from './photo.jpg';
import { bio, icons, contactInfo } from './constants';

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

const Profile = () => (
  <Wrapper>
    <Photo src={photo} alt="Profile Photo" />
    <Container>
      <Header h1={messages.h1} h2={messages.h2} />
      <Bio bio={bio} />
      <IconBar icons={icons} />
      <EmailLink {...contactInfo} />
    </Container>
  </Wrapper>
);

export default Profile;
