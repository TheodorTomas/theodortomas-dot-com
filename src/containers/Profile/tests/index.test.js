import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from 'components/Header';
import Bio from 'components/Bio';
import IconBar from 'components/IconBar';
import EmailLink from 'components/EmailLink';
import Photo from '../Photo';
import Profile from '../index';

describe('<Profile />', () => {
  const renderComponent = (props = {}) => shallow(<Profile {...props} />);
  const mountComponent = (props = {}) => mount(<Profile {...props} />);

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

  describe('componentDidMount()', () => {
    it('should call window.addEventListener with correct parameters upon mounting', () => {
      window.addEventListener = jest.fn();
      mountComponent();
      expect(window.addEventListener).toHaveBeenCalledWith('load', expect.any(Function), { once: true });
    });
  });

  describe('componentWillUnmount()', () => {
    it('should call removeListeners() upon unmounting', () => {
      const spy = jest.spyOn(Profile.prototype, 'removeListeners');
      const mountedComponent = mountComponent();
      mountedComponent.unmount();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleLoad()', () => {
    it('should call setState()', () => {
      const spy = jest.spyOn(Profile.prototype, 'setState');
      const renderedComponent = renderComponent();
      renderedComponent.instance().handleLoad();
      expect(spy).toHaveBeenCalled();
    });


    it('should call removeListeners()', () => {
      const spy = jest.spyOn(Profile.prototype, 'removeListeners');
      const renderedComponent = renderComponent();
      renderedComponent.instance().handleLoad();
      expect(spy).toHaveBeenCalled();
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
});
