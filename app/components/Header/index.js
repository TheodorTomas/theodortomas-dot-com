import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <HeaderLink to="/about">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
        <HeaderLink to="/tech">
          <FormattedMessage {...messages.tech} />
        </HeaderLink>
        <HeaderLink to="/contact">
          <FormattedMessage {...messages.contact} />
        </HeaderLink>
        <HeaderLink href="https://www.linkedin.com/in/theodortomas" target="_blank" >
          <span>in</span>
        </HeaderLink>
        <HeaderLink href="https://github.com/TheodorTomas" target="_blank" >
          <span>git</span>
        </HeaderLink>
        <HeaderLink
          href="http://www.twitter.com/TheodorTomas"
          target="_blank"
          className="icoTwitter"
          title="Twitter">
            <i className="fa fa-twitter">twit</i>
        </HeaderLink>
      </NavBar>
    );
  }
}

export default Header;
