import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Video from '../index';
import { StyledVideo } from '../StyledVideo';

jest.useFakeTimers();

describe('<Video />', () => {
  const defaultProps = {
    vidSrc: 'test.png',
  };
  const renderComponent = (props = defaultProps) => renderer.create(<Video {...props} />);
  const mountComponent = (props = defaultProps) => mount(<Video {...props} />);

  describe('componentDidMount()', () => {
    it('should set the video parameter on mount', () => {
      const component = mountComponent();
      expect(component.instance().video.current).toBeTruthy();
    });

    it('should mount with state matching snapshot', () => {
      const component = mountComponent();
      expect(component.instance().state).toMatchSnapshot();
    });

    it('should call handleMount when mounting', () => {
      const spy = jest.spyOn(Video.prototype, 'handleMount');
      mountComponent();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('componentWillUnmount()', () => {
    it('should call handleUnmount when unmounting', () => {
      const spy = jest.spyOn(Video.prototype, 'handleUnmount');
      const component = mountComponent();
      component.unmount();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleMount()', () => {
    it('should do nothing if no video.current', () => {
      const component = mountComponent();
      const mockAddEventListener = jest.fn();
      component.instance().video.current = undefined;
      component.instance().handleMount();
      expect(mockAddEventListener).not.toHaveBeenCalled();
    });

    it('should set the video playbackRate correctly', () => {
      const component = mountComponent();
      component.instance().video.current.playbackRate = 0;
      component.instance().handleMount();
      expect(component.instance().video.current.playbackRate).toBe(2.5);
    });

    it('should set the an event listener on the video.current correctly', () => {
      const component = mountComponent();
      const mockAddEventListener = jest.fn();
      component.instance().video.current.addEventListener = mockAddEventListener;
      component.instance().handleMount();
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'ended',
        component.instance().handleVideoEnding,
        false,
      );
    });
  });

  describe('handleUnmount()', () => {
    it('should remove the event listener from the video.current on unmount', () => {
      const component = mountComponent();
      const mockRemoveEventListener = jest.fn();
      component.instance().video.current.removeEventListener = mockRemoveEventListener;
      component.instance().handleUnmount();
      expect(mockRemoveEventListener).toHaveBeenCalledWith(
        'ended',
        component.instance().handleVideoEnding,
      );
      expect(clearInterval).toHaveBeenCalledWith(component.instance().intervalRewind);
    });
  });

  describe('handleVideoEnding()', () => {
    it('should set state to isClickable = false', () => {
      const component = mountComponent();
      const spy = jest.spyOn(Video.prototype, 'setState');
      component.instance().handleVideoEnding();
      expect(spy).toHaveBeenCalledWith({ isClickable: true });
    });
  });

  describe('handleVideoClick()', () => {
    it('should do nothing if state.isClickable = false ', () => {
      const component = mountComponent();
      component.instance().video.current.play = () => {};
      component.instance().setState({ isClickable: false });
      component.update();

      expect(component.instance().state.isClickable).toBe(false);
      component.instance().handleVideoClick();
      expect(component.instance().state.isClickable).toBe(false);
    });

    it('should handle if state.isClickable = true correctly', () => {
      const component = mountComponent();
      component.instance().video.current.play = () => {};
      const setStateSpy = jest.spyOn(Video.prototype, 'setState');
      const rewindVideoSpy = jest.spyOn(component.instance(), 'rewindVideo');

      component.instance().setState({ isClickable: true });
      component.update();
      component.instance().handleVideoClick();

      expect(setStateSpy).toHaveBeenCalled();
      expect(rewindVideoSpy).toHaveBeenCalled();
      expect(setInterval).toHaveBeenCalledWith(component.instance().rewindVideo, 66);
    });
  });

  describe('rewindVideo()', () => {
    it('should handle the instance of the time being less or equal to 0.5', () => {
      const component = mountComponent();
      component.instance().video.current.currentTime = 0;
      const mockAddEventListener = jest.fn();
      const mockPlay = jest.fn();
      component.instance().video.current.addEventListener = mockAddEventListener;
      component.instance().video.current.play = mockPlay;
      component.instance().rewindVideo();
      expect(clearInterval).toHaveBeenCalledWith(component.instance().intervalRewind);
      expect(mockAddEventListener).toHaveBeenCalledWith('ended', expect.any(Function), false);
      expect(mockPlay).toHaveBeenCalled();
    });

    it('should handle the instance of the time being between or equal to 0.5 and 1', () => {
      const component = mountComponent();
      const currentTime = 1;
      component.instance().video.current.currentTime = currentTime;
      component.instance().video.current.play = () => {};
      component.instance().rewindVideo();
      expect(component.instance().video.current.currentTime).toBe(currentTime - 0.11);
    });

    it('should handle the instance of the time being greater than 1', () => {
      const component = mountComponent();
      component.instance().video.current.currentTime = 1.33;
      component.instance().video.current.play = () => {};
      component.instance().rewindVideo();
      expect(component.instance().video.current.currentTime).toBe(1);
    });
  });

  describe('render()', () => {
    it('should render component matching the snapshot', () => {
      const component = renderComponent();
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('should render the correct title according to isClickable', () => {
      const component = mountComponent();

      expect(component.instance().state.isClickable).toBe(false);
      expect(component.find(StyledVideo).props().title).toBe('');

      component.instance().setState({ isClickable: true });
      component.update();

      expect(component.find(StyledVideo).props().title).toBe('Click me!');
    });
  });
});
