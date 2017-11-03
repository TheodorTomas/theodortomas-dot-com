/**
 * Text renders the messages passed to H1 and H2.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Wrapper = styled.header`
  text-align: center;
  color: #D3D3D3;
  line-height: 1.5em;
`;

const Text = ({ h1, h2, h3 }) => (
  <Wrapper>
    <h1>
      <FormattedMessage {...h1} />
    </h1>
    <h2>
      <FormattedMessage {...h2} />
    </h2>
    <h3>
      <FormattedMessage {...h3} />
    </h3>
  </Wrapper>
);

Text.propTypes = {
  h1: PropTypes.object.isRequired,
  h2: PropTypes.object.isRequired,
  h3: PropTypes.object.isRequired,
};

export default Text;
