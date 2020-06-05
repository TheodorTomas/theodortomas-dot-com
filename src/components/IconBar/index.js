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
    {icons.map(({ svg, href, title, color }) => (
      <IconLink
        key={`icon-link-${title}`}
        svg={svg}
        href={href}
        title={title}
        alternateFill={color}
      />
    ))}
  </StyledDiv>
);

IconBar.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.exact({
      svg: PropTypes.object.isRequired,
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default IconBar;
