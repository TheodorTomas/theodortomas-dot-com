import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { CTAAnalytics } from '../../../utils/analytics';
import { contactInfo } from '../../../data';
import EmailLink, { StyledA } from '../index';

jest.mock('utils/analytics', () => ({
  CTAAnalytics: jest.fn(),
}));

describe('<EmailLink />', () => {
  const renderComponent = (props = contactInfo) => shallow(<EmailLink {...props} />);
  const mountComponent = (props = contactInfo) => mount(<EmailLink {...props} />);

  it('should render a <a> tag', () => {
    const component = mountComponent();
    const styledA = enzymeFind(component, StyledA);
    expect(styledA.type()).toEqual('a');
  });

  describe('should render with prop: ', () => {
    it('href', () => {
      const component = renderComponent();
      expect(component.prop('href')).toBeDefined();
    });

    it('title', () => {
      const component = renderComponent();
      expect(component.prop('title')).toBeDefined();
    });

    it('target', () => {
      const component = renderComponent();
      expect(component.prop('target')).toBeDefined();
    });

    it('onClick', () => {
      const component = renderComponent();
      expect(component.prop('onClick')).toBeDefined();
    });
  });

  it('should contain text prop', () => {
    const component = renderComponent();
    expect(component.contains(contactInfo.text)).toBe(true);
  });

  it('should call CTAAnalytics with correct parameter', () => {
    const component = mountComponent();
    component.find('a').simulate('click');
    expect(CTAAnalytics).toHaveBeenCalledWith({ category: 'Email Link' });
  });
});
