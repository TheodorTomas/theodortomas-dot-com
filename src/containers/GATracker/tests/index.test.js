import React from 'react';
import { shallow } from 'enzyme';
import * as ReactGA from 'react-ga';
import { GATracker } from '../index';

describe('<GATracker />', () => {
  const renderComponent = (props = {}) => shallow(<GATracker {...props} />);

  it('should return null', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.equals(null)).toBe(true);
  });

  describe('componentDidMount()', () => {
    it('should call .initialize()', () => {
      const spy = jest.spyOn(ReactGA, 'initialize');
      renderComponent();
      expect(spy).toHaveBeenCalled();
    });
    it('should call .set()', () => {
      const spy = jest.spyOn(ReactGA, 'set');
      renderComponent();
      expect(spy).toHaveBeenCalled();
    });
    it('should call .pageview()', () => {
      const spy = jest.spyOn(ReactGA, 'pageview');
      renderComponent();
      expect(spy).toHaveBeenCalled();
    });
  });
});
