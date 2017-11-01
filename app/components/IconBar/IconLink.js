/**
 * Renders a IconLink(<i> wrapped in a <a> tag, enforcing the usage of the className,
 * href and title tag with a default target of _blank. Also uses the hoverColor to set
 * the icon hover and active color.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from '../A';

const Link = styled(A)`
  cursor: pointer;
  i {
    transition: color 0.25s ease-in-out;
    color: #95A3B3;
    font-size: 1.5em;
  }

  i:link {
    color: #95A3B3;
  }

  i:visited {
    color: #95A3B3;
  }

  i:hover,
  i:active {
    ${({ hoverColor }) => `color: ${hoverColor};`};
  }
`;

const IconLink = ({ className, href, title, hoverColor }) => (
  <Link href={href} title={title} hoverColor={hoverColor} target="_blank">
    <i className={className} />
  </Link>
);

IconLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

export default IconLink;
