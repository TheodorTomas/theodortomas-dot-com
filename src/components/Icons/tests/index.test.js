import React from 'react';
import { shallow } from 'enzyme';
import IconLink from '../IconLink';
import IconBar from '../index';

describe('<IconBar />', () => {
  const defaultProps = {
    icons: [{
      href: 'test-icon-href',
      title: 'test-title',
      svg: <svg></svg>,
    }],
  };
  const renderComponent = (props = defaultProps) => shallow(<IconBar {...props} />);

  it('should render the given icon in props as a <IconLink>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(
      <IconLink
        href={defaultProps.icons[0].href}
        title={defaultProps.icons[0].title}
        svg={defaultProps.icons[0].svg}
      />)).toBe(true);
  });
});
