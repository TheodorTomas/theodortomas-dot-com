/**
 * Renders a EmailLink in a <a> tag, enforcing the usage of the
 * href, title and email attributes.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import * as ReactGA from 'react-ga';
import { COLORS } from 'containers/App/constants';

const Wrapper = Styled.a`
  /* Flex */
  display: flex;
  justify-content: center;

  /* Sizing */
  width: 100%;
  line-height: 100%;

  /* Misc */
  text-align: center;
  color: ${COLORS.blueGrey.hex};
  transition: color 0.5s ease-in-out, font 0.5s ease-in-out;
  cursor: pointer;

  &:visited,
  &:hover,
  &:active {
    color: ${COLORS.green.hex};
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
