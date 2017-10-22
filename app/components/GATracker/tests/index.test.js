import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import GoogleAnalytics from 'react-ga';

import { GATracker } from '../index';
configure({ adapter: new Adapter() }); // Configure Enzyme adapter

describe('<GATracker />', () => {
  const renderComponent = (props = {}) => shallow(<GATracker {...props} />);
  const mountComponent = (props = {}) => mount(<GATracker {...props} store={{}} />);
  const pathname = '/path/name';
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    // stub google analytics functions to avoid errors and avoid sending data
    sandbox.stub(GoogleAnalytics, 'initialize').returns(() => {});
    sandbox.stub(GoogleAnalytics, 'set').returns(() => {});
    sandbox.stub(GoogleAnalytics, 'pageview').returns(() => {});
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('render()', () => {
    it('should return null', () => {
      const renderedComponent = renderComponent({ pathname });
      expect(renderedComponent.equals(null)).toBe(true);
    });
  });

  describe('componentDidMount()', () => {
    it('should call .initialize()', () => {
      renderComponent({ pathname });
      expect(GoogleAnalytics.initialize.calledOnce).toBe(true);
    });

    it('should contain the prop: pathname', () => {
      const mountedComponent = mountComponent({ pathname });
      expect(mountedComponent.prop('pathname')).toBe(pathname);
    });

    it('should call this.track on render', () => {
      sandbox.spy(GATracker.prototype, 'track');
      renderComponent({ pathname });
      expect(GATracker.prototype.track.calledOnce).toBe(true);
    });
  });

  describe('componentWillReceiveProps()', () => {
    it('should call this.track again when receiving a new pathname', () => {
      sandbox.spy(GATracker.prototype, 'track');
      const mountedComponent = mountComponent({ pathname });
      const newPathname = '/new/path';
      mountedComponent.setProps({ pathname: newPathname });
      expect(mountedComponent.prop('pathname')).toBe(newPathname);
      expect(GATracker.prototype.track.calledTwice).toBe(true);
    });

    it('should not call this.track again if receiving the same pathname', () => {
      sandbox.spy(GATracker.prototype, 'track');
      const mountedComponent = mountComponent({ pathname });
      mountedComponent.setProps({ pathname });
      expect(mountedComponent.prop('pathname')).toBe(pathname);
      expect(GATracker.prototype.track.calledOnce).toBe(true);
    });
  });

  describe('track(pathname)', () => {
    it('should call .set() and .pageview()', () => {
      renderComponent({ pathname });
      expect(GoogleAnalytics.set.calledOnce).toBe(true);
      expect(GoogleAnalytics.pageview.calledOnce).toBe(true);
    });
  });
});
