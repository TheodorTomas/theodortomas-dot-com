/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../index';

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Icon {...props}>
    {children}
  </Icon>
);

describe('<Icon />', () => {
  it('should render an <i> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('i');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('i').hasClass(className)).toEqual(true);
  })
});
