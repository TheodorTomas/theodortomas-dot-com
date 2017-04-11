/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Canvas from '../index';

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Canvas {...props}>
    {children}
  </Canvas>
);

describe('<Canvas />', () => {
  it('should render an <canvas> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('canvas');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('canvas').hasClass(id)).toEqual(true);
  })
});
