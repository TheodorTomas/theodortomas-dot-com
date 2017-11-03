/**
 * Text renders the messages passed to H1, H2 and H3.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Wrapper = styled.header`
  // Font
  text-align: center;
  font-weight: normal;
  
  // Sizing
  padding: 1em 0;
  
  h1,
  h2 {
    color: #78C8B4;
    margin: 0;
  }
  
  h1 {
    font-size: 2em;
    line-height: 2em;
  }
  
  h2 {
    font-size: 1.25em;
    line-height: 1.25em;
  }
`;

const Text = ({ h1, h2 }) => (
  <Wrapper>
    <h1>
      <FormattedMessage {...h1} />
    </h1>
    <h2>
      <FormattedMessage {...h2} />
    </h2>
  </Wrapper>
);

Text.propTypes = {
  h1: PropTypes.object.isRequired,
  h2: PropTypes.object.isRequired,
};

export default Text;
