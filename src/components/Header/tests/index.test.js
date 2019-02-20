import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Header, { Wrapper } from '../index';

describe('<Header />', () => {
  const defaultProps = {
    h1: 'Hello! My name is Theodór Tómas',
    h2: 'Software Engineer',
  };
  const renderComponent = (props = defaultProps) => mount(<Header {...props} />);

  it('should render a <header> tag', () => {
    const component = renderComponent();
    const renderedComponent = enzymeFind(component, Wrapper);
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
