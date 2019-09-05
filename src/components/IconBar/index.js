/**
 * Renders the list of icons as IconLinks mapping their
 * svg, href and title values.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconLink from './IconLink';

export const StyledDiv = styled.div`
  /* Flex-box */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  margin: 0.75em 0 1em;
`;

const IconBar = ({ icons }) => (
  <StyledDiv>
    {icons.map(icon => (
      <IconLink
        key={`icon-link-${icon.title}`}
        svg={icon.svg}
        href={icon.href}
        title={icon.title}
      />
    ))}
  </StyledDiv>
);

IconBar.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      svg: PropTypes.object.isRequired,
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default IconBar;
