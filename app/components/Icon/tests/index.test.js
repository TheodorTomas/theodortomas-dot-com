/**
 * Testing our Icon and I component
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '../index';
import I from '../I';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<Icon />', () => {
  const renderComponent = (props = { className: 'default' }) => shallow(<Icon {...props} />);
  it('should render an <I> component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual(I);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });
});

describe('<I />', () => {
  const renderComponent = (props = {}) => shallow(<I {...props} />);

  it('should render an <i> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('i');
  });
});
