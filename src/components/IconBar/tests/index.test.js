import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import IconLink from '../IconLink';
import IconBar, { StyledDiv } from '../index';

describe('<IconBar />', () => {
  const defaultProps = {
    icons: [
      {
        href: 'test-icon-href',
        title: 'test-title',
        svg: <svg></svg>,
      },
    ],
  };
  const renderComponent = (props = defaultProps) => shallow(<IconBar {...props} />);
  const mountComponent = (props = defaultProps) => mount(<IconBar {...props} />);

  it('should render a <div> tag', () => {
    const component = mountComponent();
    const styledDiv = enzymeFind(component, StyledDiv);
    expect(styledDiv.type()).toEqual('div');
  });

  it('should render the given icon in props as a <IconLink>', () => {
    const component = renderComponent();
    expect(
      component.contains(
        <IconLink
          href={defaultProps.icons[0].href}
          title={defaultProps.icons[0].title}
          svg={defaultProps.icons[0].svg}
        />,
      ),
    ).toBe(true);
  });
});
