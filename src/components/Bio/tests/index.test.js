import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { bio } from '../../../containers/Profile/data';
import Bio, { StyledDiv } from '../index';

describe('<Bio />', () => {
  const defaultProps = { bio };
  const mountComponent = (props = defaultProps) => mount(<Bio {...props} />);

  it('should render all bio items inside a div element<div>', () => {
    const component = mountComponent();
    const styledDiv = enzymeFind(component, StyledDiv);
    expect(styledDiv.type()).toEqual('div');
  });

  it('should render all individual bio items in a <span>', () => {
    const component = mountComponent();
    expect(component.find('span').length).toEqual(bio.length);
  });

  it('should render the item with correct keys as a <span> adding "~/" to each', () => {
    const component = mountComponent();
    const expectedKey = `bio-${bio[0]}`;
    const expectedItem = bio[0];
    expect(component.contains(
      <span key={expectedKey}>{`~/${expectedItem}`}</span>)
    ).toEqual(true);
  });
});
