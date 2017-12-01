/**
 * Renders a IconLink(<i> wrapped in a <a> tag, enforcing the usage of the className,
 * href and title attributes with a default target of _blank. Also uses the hoverColor to set
 * the icon hover and active color.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { COLORS } from 'containers/App/constants';
const { blueGrey } = COLORS; // forces the green parameter to exist.

const Wrapper = styled.a`
  color: ${blueGrey};
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

const trackAnalytics = (title) => ReactGA.event({ category: 'Icon Link', action: 'Click', label: title });

const IconLink = ({ className, href, title, hoverColor }) => (
  <Wrapper href={href} title={title} hoverColor={hoverColor} target="_blank" onClick={() => trackAnalytics(title)}>
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
