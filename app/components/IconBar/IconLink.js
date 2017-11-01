/**
 * Renders a IconLink(<i> wrapped in a <a> tag, enforcing the usage of the className,
 * href and title tag with a default target of _blank. Depends on title to find the hover
 * and active colors.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from '../A';

const getHoverColor = (title) => {
  if (title === 'Linkedin') return 'color: #0077b5';
  if (title === 'Github') return 'color: #6cc644';
  if (title === 'Twitter') return 'color: #1da1f2';
  return 'color: #84DCC6;'; // default website color
};

const Link = styled(A)`
  cursor: pointer;
  i {
    transition: color 0.25s ease-in-out;
    color: #95A3B3;
    font-size: 2em;
  }

  i:link {
    color: #95A3B3;
  }

  i:visited {
    color: #95A3B3;
  }

  i:hover,
  i:active {
    ${({ title }) => getHoverColor(title)};
  }
`;

const IconLink = ({ className, href, title }) => (
  <Link href={href} title={title} target="_blank">
    <i className={className} />
  </Link>
);

IconLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IconLink;
