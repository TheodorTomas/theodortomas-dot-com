import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import A from 'components/A';
import IconBar from '../index';
import Wrapper from '../Wrapper';
import IconLink from '../IconLink';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<IconBar />', () => {
  const renderComponent = (props = {}) => shallow(<IconBar {...props} />);

  it('should be wrapped in the styled component "Wrapper"', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is(Wrapper)).toBe(true);
  });
});

describe('IconBar <Wrapper />', () => {
  const renderComponent = (props = {}) => shallow(<Wrapper {...props} />);

  it('should render a div tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('div')).toBe(true);
  });
});

describe('<IconLink />', () => {
  const renderComponent = (props = { className: 'default' }) => shallow(<IconLink {...props} />);
  it('should render an <A> component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual(A);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });
});
