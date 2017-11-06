import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from 'components/Header';
import Bio from 'components/Bio';
import IconBar from 'components/IconBar';
import EmailLink from 'components/EmailLink';
import Photo from '../Photo';
import Container from '../Container';
import Profile from '../index';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<Profile />', () => {
  const renderComponent = (props = {}) => shallow(<Profile {...props} />).dive();

  it('should contain a <article> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('article');
  });

  it('should contain a  <Photo>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Photo).length).toEqual(1);
  });

  it('should contain a  <Container>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Container).length).toEqual(1);
  });

  it('should contain a  <Header>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  it('should contain a  <Bio>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Bio).length).toEqual(1);
  });

  it('should contain a  <IconBar>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(IconBar).length).toEqual(1);
  });

  it('should contain a  <EmailLink>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(EmailLink).length).toEqual(1);
  });
});
