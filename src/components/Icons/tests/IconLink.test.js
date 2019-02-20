import React from 'react';
import { shallow, mount } from 'enzyme';
import * as ReactGA from 'react-ga'; // Google analytics
import IconLink from '../IconLink';

describe('<IconLink />', () => {
  const defaultProps = {
    svg: <svg />,
    href: 'www.theodortomas.com',
    title: 'test title',
  };
  const renderComponent = (props = defaultProps) => shallow(<IconLink {...props} />);
  const mountComponent = (props = defaultProps) => mount(<IconLink {...props} />);

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
      expect(renderedComponent.prop('target')).toBe('_blank');
    });

    it('rel', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('rel')).toBeDefined();
      expect(renderedComponent.prop('rel')).toBe('noreferrer noopener');
    });

    it('onClick', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('onClick')).toBeDefined();
    });
  });

  it('should contain a svg', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(defaultProps.svg)).toBe(true);
  });

  it('should render a i with a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(defaultProps.svg)).toEqual(true);
  });

  it('should send Google Analytics event on click', () => {
    const spy = jest.spyOn(ReactGA, 'event');
    const mountedComponent = mountComponent();
    mountedComponent.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
