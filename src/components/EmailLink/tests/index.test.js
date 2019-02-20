import React from 'react';
import { shallow, mount } from 'enzyme';
import * as ReactGA from 'react-ga'; // Google analytics
import { enzymeFind } from 'styled-components/test-utils';
import { contactInfo } from 'containers/Profile/constants';
import EmailLink, { Wrapper } from '../index';

describe('<EmailLink />', () => {
  const renderComponent = (props = contactInfo) => shallow(<EmailLink {...props} />);
  const mountComponent = (props = contactInfo) => mount(<EmailLink {...props} />);

  it('should render a <a> tag', () => {
    const component = mountComponent();
    const mountedComponent = enzymeFind(component, Wrapper);
    expect(mountedComponent.type()).toEqual('a');
  });

  describe('should render with prop: ', () => {
    it('href', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('href')).toBeDefined();
    });

    it('title', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('title')).toBeDefined();
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

  it('should contain text prop', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(contactInfo.text)).toBe(true);
  });

  it('should send Google Analytics event on click', () => {
    const spy = jest.spyOn(ReactGA, 'event');
    const mountedComponent = mountComponent();
    mountedComponent.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
