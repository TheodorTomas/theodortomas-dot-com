/**
 * Profile container, containing what data should be used with which components.
 */
import React from 'react';
import Styled from 'styled-components';
import IconBar from 'components/IconBar';
import Bio from 'components/Bio';
import Header from 'components/Header';
import EmailLink from 'components/EmailLink';
import Photo from './Photo';
import messages from './messages';
import photo from './photo.jpg';
import { bio, icons, contactInfo } from './constants';

const Wrapper = Styled.article`
  /* Flex-box */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  /* Sizing */
  width: 50%;
  min-width: calc(200px + (2 * 2em) + 10vw);
  margin: auto;
  padding: 2em;
  
  /* Misc */
  position: relative;
  z-index: 1;
  background-color: rgba(74, 74, 74, 0.75);
  border: 1px solid rgba(74, 74, 74, 0.75);
  border-radius: 0.25em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Profile = () => (
  <Wrapper>
    <Photo src={photo} alt="Profile Photo" />
    <Header h1={messages.h1} h2={messages.h2} />
    <Bio bio={bio} />
    <IconBar icons={icons} />
    <EmailLink {...contactInfo} />
  </Wrapper>
);

export default Profile;
