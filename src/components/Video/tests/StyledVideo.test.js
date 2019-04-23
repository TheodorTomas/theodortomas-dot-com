import React from 'react';
import renderer from 'react-test-renderer';
import { StyledVideo } from '../StyledVideo';

describe('render()', () => {
  it('should render component matching the snapshot when isClickable = false', () => {
    const component = renderer.create(<StyledVideo isClickable={false} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component matching the snapshot when isClickable = true', () => {
    const component = renderer.create(<StyledVideo isClickable />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
