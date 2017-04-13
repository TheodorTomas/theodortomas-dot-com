/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Dots from '../index';

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Dots {...props}>
    {children}
  </Dots>
);

describe('<Dots />', () => {
  it('should render an <canvas> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('canvas');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

});
