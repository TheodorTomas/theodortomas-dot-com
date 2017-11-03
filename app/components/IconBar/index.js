/**
 * Renders the list of icons as IconLinks mapping their
 * href, title, className and color values accordingly.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconLink from './IconLink';

const Wrapper = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  
  // Sizing
  padding: 1em 0;
  
  // List items
  &,
  li{
    display: inline-flex;
    list-style-type: none;
    margin: 0 1em;
  }
  
  li:first-child {
    margin: 0 1em 0 auto;
  }
  
  li:last-child{
    margin: 0 auto 0 1em;
  }
`;

const IconBar = ({ icons }) => (
  <Wrapper>
    {icons.map((icon) => (
      <li key={`icon-link-${icon.title}`}>
        <IconLink
          href={icon.href}
          title={icon.title}
          className={icon.className}
          hoverColor={icon.hoverColor}
        />
      </li>
    ))}
  </Wrapper>
);

IconBar.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default IconBar;
