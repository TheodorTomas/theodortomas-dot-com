import React from 'react';
import Helmet from 'react-helmet';
import { shallow } from 'enzyme';
import GATracker from 'containers/GATracker';
import Profile from 'containers/Profile';
import App from '../index';

describe('<App />', () => {
  const renderComponent = (props = {}) => shallow(<App {...props} />);

  it('should contain a <Helmet> component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Helmet).length).toBe(1);
  });

  it('should contain a <GATracker> component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(<GATracker />)).toBe(true);
  });

  it('should contain a <Route> component to the profile component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(<Profile />)).toBe(true);
  });
});
