import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Header from 'components/Header';
import Bio from 'components/Bio';
import Icons from 'components/Icons';
import EmailLink from 'components/EmailLink';
import Photo from 'components/Photo';
import Profile, { Wrapper } from '../index';

describe('<Profile />', () => {
  const renderComponent = (props = {}) => mount(<Profile {...props} />);

  it('should contain a <article>', () => {
    const component = renderComponent();
    const renderedComponent = enzymeFind(component, Wrapper);
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
