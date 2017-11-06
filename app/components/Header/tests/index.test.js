import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormattedMessage } from 'react-intl';
import Header from '../index';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<Header />', () => {
  const messages = {
    h1: {
      id: 'app.containers.ProfilePage.h1',
      defaultMessage: 'Hello! My name is Theodór Tómas',
    },
    h2: {
      id: 'app.containers.ProfilePage.h2',
      defaultMessage: 'Software Engineer',
    },
  };
  const defaultProps = {
    h1: messages.h1,
    h2: messages.h2,
  };
  const renderComponent = (props = defaultProps) => shallow(<Header {...props} />).dive();

  it('should render a <header> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('header');
  });

  it('should render two <FormattedMessages>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(FormattedMessage).length).toEqual(2);
  });
});
