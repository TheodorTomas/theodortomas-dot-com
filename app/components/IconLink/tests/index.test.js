import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import ReactGA from 'react-ga'; // Google analytics
import { IntlProvider } from 'react-intl';
import IconLink from 'components/IconLink';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<IconLink />', () => {
  const defaultProps = {
    className: 'test-class-name',
    href: 'www.theodortomas.com',
    title: 'test title',
    hoverColor: '#ffffff',
  };
  const renderComponent = (props = defaultProps) => shallow(<IconLink {...props} />);

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
    sinon.spy(ReactGA, 'event');
    const mountComponent = mount(
      <IntlProvider locale="en">
        <IconLink {...defaultProps} />
      </IntlProvider>
    );
    mountComponent.find('a').simulate('click');
    expect(ReactGA.event.calledOnce).toEqual(true);
    ReactGA.event.restore();
  });
});
