import React from 'react';
import { shallow } from 'enzyme';
import Photo, { showImg } from '../index';

describe('<Photo />', () => {
  const defaultProps = {
    src: 'test.png',
    alt: 'test',
  };
  const renderComponent = (props = defaultProps) => shallow(<Photo {...props} />);

  it('should render an <img> tag', () => {
    const renderedComponent = renderComponent().dive();
    expect(renderedComponent.type()).toEqual('img');
  });

  it('should have an src attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('src')).toEqual(defaultProps.src);
  });

  it('should have an alt attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('alt')).toEqual(defaultProps.alt);
  });

  it('should have an onLoad function', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('onLoad')).toEqual(expect.any(Function));
  });

  describe('showImg()', () => {
    let el;
    beforeEach(() => {
      el = {
        target: {
          style: {
            opacity: 1,
          },
        },
      };
    });

    it('should add opacity 1 to target on load', () => {
      showImg(el);
      expect(el.target.style.opacity).toBe(1);
    });
  });
});
