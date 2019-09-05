import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';

describe('<App />', () => {
  const tree = renderer.create(<App />).toJSON();

  it('should render matching snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
