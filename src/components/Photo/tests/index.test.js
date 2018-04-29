import React from 'react';
import { shallow } from 'enzyme';
import Photo from '../index';

describe('<Photo />', () => {
  const defaultProps = {
    src: 'test.png',
    alt: 'test',
  };
  const renderComponent = (props = defaultProps) => shallow(<Photo {...props} />);

  it('should render an <img> tag', () => {
    const renderedComponent = renderComponent().dive();
    expect(renderedComponent.type()).toEqual('img');
  });

  it('should have an src attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('src')).toEqual(defaultProps.src);
  });

  it('should have an alt attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('alt')).toEqual(defaultProps.alt);
  });
});
