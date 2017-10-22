/**
 * Renders an icon, enforcing the usage of the className="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import I from './I';

const Icon = ({ className }) => <I className={className} />;

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Icon;
