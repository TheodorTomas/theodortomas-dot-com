/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import I from '../I';

const href = 'http://mxstbr.com/';
const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <I href={href} {...props}>
    {children}
  </I>
);

describe('<I />', () => {
  it('should render an <i> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('i');
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('i').hasClass(className)).toEqual(true);
  });

});
