/**
 * Renders a EmailLink in a <a> tag, enforcing the usage of the
 * href, title and email attributes.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.a`
  margin: auto;
  &,
  &:link,
  &:visited {
    transition: color 0.25s ease-in-out;
    color: #95A3B3;
    font-size: 1em;
    cursor: pointer;
  }

  &:hover,
  &:active {
    color: #78C8B4;
  }
`;

const EmailLink = ({ href, title, text }) => (
  <Wrapper href={href} title={title} target="_blank">
    {text}
  </Wrapper>
);

EmailLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EmailLink;
