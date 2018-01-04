/**
 * Profile container, containing what data should be used with which components.
 */
import React from 'react';
import Styled from 'styled-components';
import ReactGA from 'react-ga';
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

  ${({ animateIn }) => (animateIn ? 'animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;' : '')};
`;

const start = new Date().getTime(); // this is solely for tracking purposes.

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animateIn: false };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad, { once: true });
    setTimeout(this.handleLoad, 10000); // defaults to removing loading functionality after 10 seconds
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  handleLoad() {
    if (this.state.animateIn === false) {
      this.setState({ animateIn: true });
      const loadTime = new Date().getTime() - start;
      ReactGA.timing({ category: 'Application', variable: 'load', value: loadTime, label: 'initial' });
    }
    this.removeListeners(); // this is just to ensure the listener is removed.
  }

  removeListeners() {
    window.removeEventListener('load', this.handleLoad);
  }

  render() {
    return (
      <Wrapper animateIn={this.state.animateIn}>
        <Photo src={photo} alt="Profile Photo" />
        <Header h1={messages.h1} h2={messages.h2} />
        <Bio bio={bio} />
        <IconBar icons={icons} />
        <EmailLink {...contactInfo} />
      </Wrapper>
    );
  }
}

export default Profile;
