import React from 'react';
import { shallow, mount } from 'enzyme';
import * as ReactGA from 'react-ga'; // Google analytics
import { contactInfo } from 'containers/Profile/constants';
import EmailLink from '../index';

describe('<EmailLink />', () => {
  const renderComponent = (props = contactInfo) => shallow(<EmailLink {...props} />);
  const mountComponent = (props = contactInfo) => mount(<EmailLink {...props} />);

  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent().dive();
    expect(renderedComponent.type()).toEqual('a');
  });

  it('should render with prop: ', () => {
    it('href', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('href')).toBeDefined();
    });

    it('title', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('title')).toBeDefined();
    });

    it('text', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('text')).toBeDefined();
    });

    it('target', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('target')).toBeDefined();
    });

    it('onClick', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('onClick')).toBeDefined();
    });
  });

  it('should send Google Analytics event on click', () => {
    const spy = jest.spyOn(ReactGA, 'event');
    const mountedComponent = mountComponent();
    mountedComponent.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
