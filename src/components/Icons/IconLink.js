/**
 * Renders a IconLink(<svg> wrapped in a <a> tag, enforcing the usage of the
 * href and title attributes with a default target of _blank. Also uses the className to set
 * the icon hover and active color.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ReactGA from 'react-ga'; // Google analytics
import { COLORS } from 'containers/App/constants';

const Wrapper = styled.a`
  .icon {
    color: ${COLORS.blueGrey.hex};
    cursor: pointer;
    transition: color 0.5s ease-in-out;
    margin: 0 1em;
    
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
  
    @media only screen and (max-width: 600px) {
      width: 2em;
      height: 2em;
    }
  }
  
  .linkedin:visited,
  .linkedin:hover,
  .linkedin:active {
    color: #0077b5;
  }
    
  .github:visited,
  .github:hover,
  .github:active {
    color: #6cc644;
  }

  .twitter:visited,
  .twitter:hover,
  .twitter:active {
    color: #1da1f2;
  }
`;

const trackAnalytics = title => ReactGA.event({ category: 'Icon Link', action: 'Click', label: title });

const IconLink = ({ svg, href, title }) => (
  <Wrapper
    href={href}
    title={title}
    target="_blank"
    rel="noreferrer noopener"
    onClick={() => trackAnalytics(title)}
  >
    {svg}
  </Wrapper>
);

IconLink.propTypes = {
  svg: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IconLink;
