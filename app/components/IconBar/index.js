/**
 * Renders the list of icons as IconLinks mapping their
 * href, title, className and color values accordingly.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconLink from './IconLink';

const Wrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const IconBar = ({ icons }) => (
  <Wrapper>
    {icons.map((icon) => (
      <IconLink
        key={`icon-link-${icon.title}`}
        href={icon.href}
        title={icon.title}
        className={icon.className}
        hoverColor={icon.hoverColor}
      />)
    )}
  </Wrapper>
);

IconBar.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default IconBar;
