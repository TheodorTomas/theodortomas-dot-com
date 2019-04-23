import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { CTAAnalytics } from '../../../utils/analytics';
import IconLink, { StyledA } from '../IconLink';

jest.mock('utils/analytics', () => ({
  CTAAnalytics: jest.fn(),
}));

describe('<IconLink />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    svg: <svg />,
    href: 'www.theodortomas.com',
    title: 'test-title',
  };
  const renderComponent = (props = defaultProps) => shallow(<IconLink {...props} />);
  const mountComponent = (props = defaultProps) => mount(<IconLink {...props} />);

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
      expect(component.prop('target')).toBe('_blank');
    });

    it('rel', () => {
      const component = renderComponent();
      expect(component.prop('rel')).toBeDefined();
      expect(component.prop('rel')).toBe('noreferrer noopener');
    });

    it('onClick', () => {
      const component = renderComponent();
      expect(component.prop('onClick')).toBeDefined();
    });
  });

  it('should contain a svg', () => {
    const component = renderComponent();
    expect(component.contains(defaultProps.svg)).toBe(true);
  });

  it('should render a i with a className attribute', () => {
    const component = renderComponent();
    expect(component.contains(defaultProps.svg)).toEqual(true);
  });

  it('should call CTAAnalytics with correct parameter', () => {
    const component = mountComponent();
    component.find('a').simulate('click');
    expect(CTAAnalytics).toHaveBeenCalledWith({ category: 'Icon Link', title: defaultProps.title });
  });
});
