/**
 * Render the bio as a unordered list.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from 'containers/App/constants';
const { lightGrey } = COLORS; // forcing the existence of parameters.

const Wrapper = styled.div`
  /* Flex-box */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  /* Font */
  color: ${lightGrey};
  line-height: 1em;
  font-size: 1em;
  font-family: 'Raleway', sans-serif;
  
  span {
    padding: 0.25em;
  }
`;

const Bio = ({ bio }) => (
  <Wrapper>
    {bio.map((field) =>
      field.items.map((item) =>
        (<span key={`bio-${field.title}-${item}`}>~/{item}</span>)
      )
    )}
  </Wrapper>
);

Bio.propTypes = {
  bio: PropTypes.array.isRequired,
};

export default Bio;
