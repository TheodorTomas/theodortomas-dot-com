import React from 'react';
import renderer from 'react-test-renderer';
import App from '../_app';

describe('<App />', () => {
  const tree = renderer.create(<App />).toJSON();

  it('should render matching snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
