import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Header, { StyledHeader } from '../index';

describe('<Header />', () => {
  const defaultProps = {
    h1: 'Hello! My name is Theodór Tómas',
    h2: 'Software Engineer',
  };
  const mountComponent = (props = defaultProps) => mount(<Header {...props} />);

  it('should render a <header> tag', () => {
    const component = mountComponent();
    const styledHeader = enzymeFind(component, StyledHeader);
    expect(styledHeader.type()).toEqual('header');
  });

  it('should render a h1 element', () => {
    const component = mountComponent();
    expect(component.find('h1').length).toEqual(1);
  });

  it('should render a h1 text', () => {
    const component = mountComponent();
    expect(component.contains(defaultProps.h1)).toEqual(true);
  });

  it('should render a h1 text in a span element', () => {
    const component = mountComponent();
    expect(component.contains(<span>{defaultProps.h1}</span>)).toEqual(true);
  });

  it('should render a h2 element', () => {
    const component = mountComponent();
    expect(component.find('h2').length).toEqual(1);
  });

  it('should render a h2 text', () => {
    const component = mountComponent();
    expect(component.contains(defaultProps.h2)).toEqual(true);
  });

  it('should render a h2 text in a span element', () => {
    const component = mountComponent();
    expect(component.contains(<span>{defaultProps.h2}</span>)).toEqual(true);
  });
});
