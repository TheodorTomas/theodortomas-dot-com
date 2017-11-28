/**
 * Renders a EmailLink in a <a> tag, enforcing the usage of the
 * href, title and email attributes.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import ReactGA from 'react-ga';
import { COLORS } from 'containers/App/constants';
const { blueGrey, green } = COLORS; // forcing the parameters to exist.

const Wrapper = Styled.a`
  font-family: 'Raleway', sans-serif;
  margin: auto;
  
  &,
  &:link,
  &:visited {
    transition: color 0.25s ease-in-out;
    color: ${blueGrey};
    font-size: 1em;
    cursor: pointer;
  }

  &:hover,
  &:active {
    color: ${green};
  }
`;

const trackAnalytics = () => ReactGA.event({ category: 'Email Link', action: 'Click' });

const EmailLink = ({ href, title, text }) => (
  <Wrapper href={href} title={title} target="_self" onClick={trackAnalytics}>
    {text}
  </Wrapper>
);

EmailLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EmailLink;