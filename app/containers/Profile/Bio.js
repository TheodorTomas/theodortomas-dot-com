/**
 * Render the bio as a unordered list.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  color: #D3D3D3;
  line-height: 1.25em;
  font-size: 1em;
  
  // List items
  &,
  li{
    display: inline-flex;
    list-style-type: none;
    padding: 0;
    margin: 0 0.5em;
  }
  li::before {
    content: "~/";
  }
  li:first-child,
  li:last-child{
    margin: 0 auto;
  }
`;

const Bio = ({ bio }) => (
  <Wrapper>
    {bio.map((field) => [
      field.items.map((item) =>
        <li key={`bio-field-${(field.type ? field.type : 'type')}-${item}`}>{item}</li>
      ),
    ])}
  </Wrapper>
);

Bio.propTypes = {
  bio: PropTypes.array.isRequired,
};

export default Bio;
