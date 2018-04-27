import React from 'react';
import { shallow, mount } from 'enzyme';
import * as ReactGA from 'react-ga'; // Google analytics
import IconLink from 'components/IconLink';

describe('<IconLink />', () => {
  const defaultProps = {
    className: 'test-class-name',
    href: 'www.theodortomas.com',
    title: 'test title',
    hoverColor: '#ffffff',
  };
  const renderComponent = (props = defaultProps) => shallow(<IconLink {...props} />);
  const mountComponent = (props = defaultProps) => mount(<IconLink {...props} />);

  it('should render with prop: ', () => {
    it('className', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('href', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('href')).toBeDefined();
    });

    it('title', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('title')).toBeDefined();
    });

    it('hoverColor', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('hoverColor')).toBeDefined();
    });

    it('target', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('target')).toBeDefined();
    });

    it('rel', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('target')).toBeDefined();
    });

    it('onClick', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('onClick')).toBeDefined();
    });
  });

  it('should render a i with a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(<i className={defaultProps.className} />)).toEqual(true);
  });

  it('should send Google Analytics event on click', () => {
    const spy = jest.spyOn(ReactGA, 'event');
    const mountedComponent = mountComponent();
    mountedComponent.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
