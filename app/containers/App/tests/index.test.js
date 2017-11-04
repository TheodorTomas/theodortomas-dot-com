import React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GATracker from 'components/GATracker';
import Profile from 'containers/Profile';
import App from '../index';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

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
    expect(renderedComponent.contains(<Route component={Profile} />)).toBe(true);
  });
});
