/**
 * Renders the messages passed to H1 and H2.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from 'components/H1';
import H2 from 'components/H2';

const Wrapper = styled.div`
  text-align: center;
  color: #D3D3D3;
`;

const Welcome = ({ h1, h2 }) => (
  <Wrapper>
    <H1>
      <FormattedMessage {...h1} />
    </H1>
    <H2>
      <FormattedMessage {...h2} />
    </H2>
  </Wrapper>
);

Welcome.propTypes = {
  h1: PropTypes.object.isRequired,
  h2: PropTypes.object.isRequired,
};

export default Welcome;
