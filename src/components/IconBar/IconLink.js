/**
 * Renders a IconLink(<svg> wrapped in a <a> tag, enforcing the usage of the
 * href and title attributes with a default target of _blank. Also uses the className to set
 * the icon hover and active color.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import { CTAAnalytics } from '../../utils/analytics';

export const StyledA = styled.a`
  svg {
    fill: ${COLORS.blueGrey.hex} !important;
    cursor: pointer;
    margin: 0 1em;

    transition: fill 0.25s ease-in-out, width 0.25s ease-in-out, height 0.25s ease-in-out;

    @media only screen and (max-width: 450px) {
      width: 2em;
      height: 2em;
    }
  }

  &:hover,
  &:active {
    ${({ alternateFill }) =>
      alternateFill &&
      `
      svg {
        fill: ${alternateFill};
      }
    `}
  }
`;

const IconLink = ({ svg, href, title, alternateFill }) => (
  <StyledA
    href={href}
    title={title}
    alternateFill={alternateFill}
    target="_blank"
    rel="noreferrer noopener"
    onClick={() => CTAAnalytics({ category: 'Icon Link', title })}
  >
    {svg}
  </StyledA>
);

IconLink.propTypes = {
  svg: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alternateFill: PropTypes.string.isRequired,
};

export default IconLink;
