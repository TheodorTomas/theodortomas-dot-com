import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { bio } from 'containers/Profile/constants';
import Bio from '../index';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<Bio />', () => {
  const defaultProps = {
    bio,
  };
  const renderComponent = (props = defaultProps) => shallow(<Bio {...props} />).dive();

  it('should render all bio items in bio to <ul>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should render all bio items in bio to <li>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('li').length).toEqual(4);
  });

  it('should render the item with correct keys as a <li>', () => {
    const renderedComponent = renderComponent();
    const expectedKey = `bio-field-${bio[0].title}-${bio[0].items[0]}`;
    const expectedItem = bio[0].items[0];
    expect(renderedComponent.contains(
      <li key={expectedKey}>{expectedItem}</li>)
    ).toEqual(true);
  });
});
