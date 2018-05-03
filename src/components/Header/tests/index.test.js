import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('<Header />', () => {
  const defaultProps = {
    h1: 'Hello! My name is Theodór Tómas',
    h2: 'Software Engineer',
  };
  const renderComponent = (props = defaultProps) => shallow(<Header {...props} />);

  it('should render a <header> tag', () => {
    const renderedComponent = renderComponent().dive();
    expect(renderedComponent.type()).toEqual('header');
  });

  it('should render a h1 element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('h1').length).toEqual(1);
  });

  it('should render a h1 text', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(defaultProps.h1)).toEqual(true);
  });

  it('should render a h1 text in a span element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(<span>{defaultProps.h1}</span>)).toEqual(true);
  });

  it('should render a h2 element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('h2').length).toEqual(1);
  });

  it('should render a h2 text', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(defaultProps.h2)).toEqual(true);
  });

  it('should render a h2 text in a span element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(<span>{defaultProps.h2}</span>)).toEqual(true);
  });
});
