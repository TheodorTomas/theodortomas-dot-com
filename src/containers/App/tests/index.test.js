import React from 'react';
import { shallow } from 'enzyme';
import GATracker from 'containers/GATracker';
import Profile from 'containers/Profile';
import App from '../index';

describe('<App />', () => {
  const renderComponent = (props = {}) => shallow(<App {...props} />);

  it('should contain a <GATracker> ', () => {
    const renderedComponent = renderComponent();
    // hack since enzyme doesn't support React fragments
    expect(renderedComponent.at(0).find(GATracker).length).toBe(1);
  });

  it('should contain a <Profile> ', () => {
    const renderedComponent = renderComponent();
    // hack since enzyme doesn't support React fragments
    expect(renderedComponent.at(0).find(Profile).length).toBe(1);
  });
});
