/**
 * An icon, an i tag
 */

import styled from 'styled-components';

const styledCanvas = styled.canvas`
  background-color: gold;
`;

/**
 * Renders a canvas, enforcing the usage of the id="" tag
 */

import React, { PropTypes } from 'react';

function Canvas(props) {
  return (
    <styledCanvas id={props.id} />
  );
}

Canvas.propTypes = {
  id: PropTypes.string,
};

export default Canvas;
