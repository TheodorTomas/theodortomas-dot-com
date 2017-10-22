import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import H1 from '../index';
configure({ adapter: new Adapter() });

describe('<H1 />', () => {
  const renderComponent = (props = {}) => shallow(<H1 {...props} />);

  it('should render an <h1> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('h1')).toBe(true);
  });

  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H1 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
