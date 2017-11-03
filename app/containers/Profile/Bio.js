/**
 * Render the bio as a unordered list.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  // Font
  color: #D3D3D3;
  line-height: 1em;
  font-size: 1em;
  
  // Sizing
  padding: 0.5em 0;
  
  // List items
  &,
  li{
    display: inline-flex;
    list-style-type: none;
    margin: 0 0.5em;
  }
  
  li::before {
    content: "~/";
  }
  
  li:first-child {
    margin: 0 0.5em 0 auto;
  }
  
  li:last-child{
    margin: 0 auto 0 0.5em;
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
