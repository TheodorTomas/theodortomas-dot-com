import React from 'react';
import { shallow } from 'enzyme';
import { COLORS } from 'containers/App/constants';
import Photo from '../index';

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

  it('should initially be hidden with no border', () => {
    const renderedComponent = renderComponent();
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

  describe('showImg()', () => {
    it('should change isShowImg, false => true ', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.state('isShowImg')).toBe(false);
      renderedComponent.instance().showImg();
      expect(renderedComponent.state('isShowImg')).toBe(true);
    });
  });
});
