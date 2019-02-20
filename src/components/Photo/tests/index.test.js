import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { COLORS } from '../../../containers/App/constants';
import Photo, { Img } from '../index';

describe('<Photo />', () => {
  const defaultProps = {
    src: 'test.png',
    alt: 'test',
  };
  const renderComponent = (props = defaultProps) => mount(<Photo {...props} />);

  it('should render an <img> tag', () => {
    const component = renderComponent();
    const renderedComponent = enzymeFind(component, Img);
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

  it('should be hidden with no border if isShowImg = false', () => {
    const renderedComponent = renderComponent();
    renderedComponent.setState({ isShowImg: false });
    expect(renderedComponent).toHaveStyleRule('opacity', '0');
    expect(renderedComponent).toHaveStyleRule('border-color', COLORS.blueGrey.rgba(0));
  });

  it('should show image and border on isShowImg = true', () => {
    const renderedComponent = renderComponent();
    renderedComponent.setState({ isShowImg: true });
    renderedComponent.update();
    expect(renderedComponent).toHaveStyleRule('opacity', '1');
    expect(renderedComponent).toHaveStyleRule('border-color', COLORS.blueGrey.rgba(0.5));
  });

  describe('loadImage()', () => {
    it('should loadImage() on mount ', () => {
      const spy = jest.spyOn(Photo.prototype, 'loadImage');
      renderComponent();
      expect(spy).toHaveBeenCalled();
    });

    it('should set src and onload of given object ', () => {
      const renderedComponent = renderComponent();
      const image = { onload: null, src: null };
      renderedComponent.instance().loadImage(image);
      expect(image.src).toBe(defaultProps.src);
      expect(image.onload).toEqual(expect.any(Function));
    });
  });

  describe('showImg()', () => {
    it('should change isShowImg, false => true ', () => {
      const renderedComponent = renderComponent();
      renderedComponent.setState({ isShowImg: false });
      expect(renderedComponent.state('isShowImg')).toBe(false);
      renderedComponent.instance().showImg();
      expect(renderedComponent.state('isShowImg')).toBe(true);
    });
  });
});
