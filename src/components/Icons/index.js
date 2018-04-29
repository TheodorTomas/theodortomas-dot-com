/**
 * Renders the list of icons as IconLinks mapping their
 * svg, href and title values.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconLink from './IconLink';

const Wrapper = styled.div`
  /* Flex-box */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
  margin: 1em 0;
`;

const IconBar = ({ icons }) => (
  <Wrapper>
    {icons.map(icon => (
      <IconLink
        key={`icon-link-${icon.title}`}
        svg={icon.svg}
        href={icon.href}
        title={icon.title}
      />
    ))}
  </Wrapper>
);

IconBar.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default IconBar;
