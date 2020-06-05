/**
 * Text renders the messages passed to H1 and H2.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../theme';

export const StyledHeader = styled.header`
  /* Sizing */
  margin: 1em 0 0.75em;

  /* Font */
  text-align: center;
  color: ${COLORS.green.hex};

  h1,
  h2 {
    margin: 0;
    line-height: 100%;
  }

  h2 {
    margin-top: 0.25em;
  }
`;

const Header = ({ h1, h2 }) => (
  <StyledHeader>
    <h1>
      <span>{h1}</span>
    </h1>
    <h2>
      <span>{h2}</span>
    </h2>
  </StyledHeader>
);

Header.propTypes = {
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired,
};

export default Header;
