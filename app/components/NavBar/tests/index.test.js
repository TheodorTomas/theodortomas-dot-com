import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../index';
import Wrapper from '../Wrapper';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<NavBar />', () => {
  const renderComponent = (props = {}) => shallow(<NavBar {...props} />);

  it('should be wrapped in the styled component "Wrapper"', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is(Wrapper)).toBe(true);
  });
});

describe('NavBar <Wrapper />', () => {
  const renderComponent = (props = {}) => shallow(<Wrapper {...props} />);

  it('should render a <header> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('header')).toBe(true);
  });
});
