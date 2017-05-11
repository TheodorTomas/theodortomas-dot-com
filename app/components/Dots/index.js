/**
 * Renders a canvas with dots, enforcing the usage of the id="" tag
 */

import React from 'react';
import styled from 'styled-components';
import GSAP from 'react-gsap-enhancer';

const Canvas = styled.canvas`
  border: solid yellow  5px;
  width: 300px;
  height: 300px;
`;

class Dots extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      ctx: null,
      width: null,
      height: null,
      points: null,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Canvas id={'dotCanvas'} />
    );
  }
}

export default GSAP()(Dots);
