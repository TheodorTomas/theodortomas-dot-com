import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/Header';
import Bio from 'components/Bio';
import Icons from 'components/Icons';
import EmailLink from 'components/EmailLink';
import Photo from 'components/Photo';
import Profile from '../index';

describe('<Profile />', () => {
  const renderComponent = (props = {}) => shallow(<Profile {...props} />);

  it('should contain a <article>', () => {
    const renderedComponent = renderComponent().dive(); // do deep render to find type
    expect(renderedComponent.type()).toEqual('article');
  });

  it('should contain a <Photo>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Photo).length).toEqual(1);
  });

  it('should contain a <Header>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  it('should contain a <Bio>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Bio).length).toEqual(1);
  });

  it('should contain a <Icons>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Icons).length).toEqual(1);
  });

  it('should contain a <EmailLink>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(EmailLink).length).toEqual(1);
  });
});
