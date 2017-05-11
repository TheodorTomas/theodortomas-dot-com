/**
 * Renders an icon, enforcing the usage of the className="" tag
 */

import React, { PropTypes } from 'react';
import StyledIcon from './StyledIcon';

function Icon(props) {
  return (
    <StyledIcon className={props.className} />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
