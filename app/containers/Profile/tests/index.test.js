import React from 'react';
import { IntlProvider } from 'react-intl';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import 'jest-styled-components';
import ReactGA from 'react-ga'; // Google analytics
import getTrackerId from 'containers/GATracker/trackerId';
import Header from 'components/Header';
import Bio from 'components/Bio';
import IconBar from 'components/IconBar';
import EmailLink from 'components/EmailLink';
import Photo from '../Photo';
import Profile from '../index';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter
jest.mock('react-ga');
ReactGA.initialize(getTrackerId(), { debug: false });

describe('<Profile />', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const wrapComponent = (props) => (
    <IntlProvider locale="en">
      <Profile {...props} />
    </IntlProvider>
  );
  const renderComponent = (props = {}) => shallow(<Profile {...props} />);
  const mountComponent = (props = {}) => mount(wrapComponent(props));

  describe('componentDidMount()', () => {
    it('should call window.addEventListener with correct parameters upon mounting', () => {
      window.addEventListener = jest.fn();
      mountComponent();
      expect(window.addEventListener).toHaveBeenCalledWith('load', expect.any(Function), { once: true });
    });

    it('should call setTimeout with correct parameters upon mounting', () => {
      jest.useFakeTimers();
      mountComponent();
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 10000);
    });
  });

  describe('componentWillUnmount()', () => {
    it('should call removeListeners() upon unmounting', () => {
      sandbox.spy(Profile.prototype, 'removeListeners');
      const mountedComponent = mountComponent();
      mountedComponent.unmount();
      expect(Profile.prototype.removeListeners.calledOnce).toEqual(true);
    });
  });

  describe('handleLoad()', () => {
    it('should call setState()', () => {
      sandbox.spy(Profile.prototype, 'setState');
      const renderedComponent = renderComponent();
      renderedComponent.instance().handleLoad();
      expect(Profile.prototype.setState.calledOnce).toEqual(true);
    });

    it('should not call setState() if animateIn equals true', () => {
      sandbox.spy(Profile.prototype, 'setState');
      const renderedComponent = renderComponent();
      renderedComponent.setState({ animateIn: true });
      renderedComponent.instance().handleLoad();
      expect(Profile.prototype.setState.calledTwice).toEqual(false);
    });

    it('should call ReactGA.timing()', () => {
      sinon.spy(ReactGA, 'timing');
      const renderedComponent = renderComponent();
      renderedComponent.instance().handleLoad();
      expect(ReactGA.timing.calledOnce).toEqual(true);
    });

    it('should call removeListeners()', () => {
      sandbox.spy(Profile.prototype, 'removeListeners');
      const renderedComponent = renderComponent();
      renderedComponent.instance().handleLoad();
      expect(Profile.prototype.removeListeners.calledOnce).toEqual(true);
    });
  });

  describe('removeListeners()', () => {
    it('should call window.removeListeners() with correct parameters', () => {
      window.removeEventListener = jest.fn();
      const renderedComponent = renderComponent();
      renderedComponent.instance().removeListeners();
      expect(window.removeEventListener).toHaveBeenCalledWith('load', expect.any(Function));
    });
  });

  describe('render()', () => {
    it('should contain a <article>', () => {
      const renderedComponent = renderComponent().dive(); // do deep render to find type
      expect(renderedComponent.type()).toEqual('article');
    });

    it('should contain a <Photo>', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find(Photo).length).toEqual(1);
    });

    it('should contain a <Header>', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find(Header).length).toEqual(1);
    });

    it('should contain a <Bio>', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find(Bio).length).toEqual(1);
    });

    it('should contain a <IconBar>', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find(IconBar).length).toEqual(1);
    });

    it('should contain a <EmailLink>', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find(EmailLink).length).toEqual(1);
    });

    it('should contain an animation when animateIn => true', () => {
      let renderedComponent = renderComponent();
      renderedComponent.instance().setState({ animateIn: true });
      renderedComponent = renderedComponent.update();
      expect(renderedComponent.state().animateIn).toEqual(true);
      expect(renderedComponent).toHaveStyleRule('animation', 'popIn 1s cubic-bezier(0.175,0.885,0.32,1.275) forwards');
    });

    it('should not contain an animation when animateIn => false', () => {
      let renderedComponent = renderComponent();
      renderedComponent.instance().setState({ animateIn: false });
      renderedComponent = renderedComponent.update();
      expect(renderedComponent.state().animateIn).toEqual(false);
      expect(renderedComponent).not.toHaveStyleRule('animation', 'popIn 1s cubic-bezier(0.175,0.885,0.32,1.275) forwards');
    });
  });
});
