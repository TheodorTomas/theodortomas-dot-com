/**
 * Render the bio as a unordered list.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../containers/App/constants';

const Wrapper = styled.div`
  /* Flex-box */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  /* Font */
  color: ${COLORS.lightGrey.hex};
  
  span {
    line-height: 100%;
    margin: 0.25em;
  }
`;

const Bio = ({ bio }) => (
  <Wrapper>
    {bio.map(item =>
      <span key={`bio-${item}`}>~/{item}</span>
    )}
  </Wrapper>
);

Bio.propTypes = {
  bio: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};

export default Bio;
