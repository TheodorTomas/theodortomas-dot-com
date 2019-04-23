import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Header from 'components/Header';
import Bio from 'components/Bio';
import Icons from 'components/IconBar';
import EmailLink from 'components/EmailLink';
import Photo from 'components/Video';
import Profile, { StyledArticle } from '../index';

describe('<Profile />', () => {
  const renderComponent = (props = {}) => mount(<Profile {...props} />);

  it('should contain a <article>', () => {
    const component = renderComponent();
    const styledArticle = enzymeFind(component, StyledArticle);
    expect(styledArticle.type()).toEqual('article');
  });

  it('should contain a <Video>', () => {
    const component = renderComponent();
    expect(component.find(Photo).length).toEqual(1);
  });

  it('should contain a <Header>', () => {
    const component = renderComponent();
    expect(component.find(Header).length).toEqual(1);
  });

  it('should contain a <Bio>', () => {
    const component = renderComponent();
    expect(component.find(Bio).length).toEqual(1);
  });

  it('should contain a <IconBar>', () => {
    const component = renderComponent();
    expect(component.find(Icons).length).toEqual(1);
  });

  it('should contain a <EmailLink>', () => {
    const component = renderComponent();
    expect(component.find(EmailLink).length).toEqual(1);
  });
});
