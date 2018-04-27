import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconLink from 'components/IconLink';
import IconBar from '../index';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter

describe('<IconBar />', () => {
  const defaultProps = {
    icons: [{
      href: 'test-icon-href',
      title: 'test-title',
      className: 'test-class-name',
      hoverColor: 'test-hover-color',
    }],
  };
  const renderComponent = (props = defaultProps) => shallow(<IconBar {...props} />).dive();

  it('should render the given icon in props as a <IconLink>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(
      <IconLink
        className={defaultProps.icons[0].className}
        href={defaultProps.icons[0].href}
        title={defaultProps.icons[0].title}
        hoverColor={defaultProps.icons[0].hoverColor}
      />)).toBe(true);
  });
});
