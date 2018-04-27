/**
 * Renders a IconLink(<i> wrapped in a <a> tag, enforcing the usage of the className,
 * href and title attributes with a default target of _blank. Also uses the hoverColor to set
 * the icon hover and active color.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ReactGA from 'react-ga'; // Google analytics
import { COLORS } from 'containers/App/constants';

const Wrapper = styled.a`
  /* Font */
  color: ${COLORS.blueGrey.hex};
  font-size: 1.75em;
  
  i,
  i:link,
  i:visited {
    cursor: pointer;
    transition: color 0.25s ease-in-out;
  }

  i:hover,
  i:active {
    ${({ hoverColor }) => `color: ${hoverColor};`};
  }
`;

const trackAnalytics = title => ReactGA.event({ category: 'Icon Link', action: 'Click', label: title });

const IconLink = ({ className, href, title, hoverColor }) => (
  <Wrapper
    href={href}
    title={title}
    hoverColor={hoverColor}
    target="_blank"
    rel="noreferrer noopener"
    onClick={() => trackAnalytics(title)}
  >
    <i className={className} />
  </Wrapper>
);

IconLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

export default IconLink;
