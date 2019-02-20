import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { bio } from 'containers/Profile/constants';
import Bio, { Wrapper } from '../index';

describe('<Bio />', () => {
  const defaultProps = { bio };
  const mountComponent = (props = defaultProps) => mount(<Bio {...props} />);

  it('should render all bio items inside a div element<div>', () => {
    const component = mountComponent();
    const renderedComponent = enzymeFind(component, Wrapper);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render all individual bio items in a <span>', () => {
    const renderedComponent = mountComponent();
    expect(renderedComponent.find('span').length).toEqual(7);
  });

  it('should render the item with correct keys as a <span> adding "~/" to each', () => {
    const renderedComponent = mountComponent();
    const expectedKey = `bio-${bio[0]}`;
    const expectedItem = bio[0];
    expect(renderedComponent.contains(
      <span key={expectedKey}>{`~/${expectedItem}`}</span>)
    ).toEqual(true);
  });
});
