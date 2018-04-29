/**
 * Text renders the messages passed to H1, H2 and H3.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from 'containers/App/constants';

const Wrapper = styled.header`
  /* Font */
  text-align: center;
  font-weight: normal;
  
  /* Sizing */
  padding: 1em 0;
  
  h1,
  h2 {
    color: ${COLORS.green.hex};
    margin: 0;
  }
  
  h1 {
    font-size: 2em;
    line-height: 1.25em;
  }
  
  h2 {
    font-size: 1.25em;
    line-height: 1.25em;
  }
`;

const Header = ({ h1, h2 }) => (
  <Wrapper>
    <h1>
      {h1}
    </h1>
    <h2>
      {h2}
    </h2>
  </Wrapper>
);

Header.propTypes = {
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired,
};

export default Header;
