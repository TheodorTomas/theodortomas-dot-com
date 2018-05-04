/**
 * Profile container, containing what data should be used with which components.
 */
import React from 'react';
import Styled from 'styled-components';
import Icons from 'components/Icons';
import Bio from 'components/Bio';
import Header from 'components/Header';
import EmailLink from 'components/EmailLink';
import Photo from 'components/Photo';
import { COLORS } from 'containers/App/constants';
import messages from './messages';
import photo from './images/photo.jpg';
import { bio, icons, contactInfo } from './constants';

const Wrapper = Styled.article`
  /* Flex-box */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  
  /* Sizing */
  margin: auto;
  padding: 32px;
  width: 50%;
  min-width: calc(150px + (2 * 32px) + 10vw);
  
  /* Misc */
  position: relative;
  z-index: 1;
  background-color: ${COLORS.darkGrey.rgba(0.75)};
  border: 1px solid ${COLORS.darkGrey.rgba(0.75)};
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  opacity: 0;
  
  /* Animations */
  @keyframes popIn {
    0% {
      transform: scale(0.95) translateZ(0);
      opacity: 0;
    }
    
    100% {
      transform: scale(1) translateZ(0);
      opacity: 1;
    }
  }
  
  animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 250ms;
`;

const Profile = () => (
  <Wrapper>
    <Photo src={photo} alt="Profile Photo" />
    <Header h1={messages.h1} h2={messages.h2} />
    <Bio bio={bio} />
    <Icons icons={icons} />
    <EmailLink {...contactInfo} />
  </Wrapper>
);

export default Profile;
