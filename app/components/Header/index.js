import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/about">
          <span className="glyphicon glyphicon-search" aria-hidden="false"></span>
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/tech">
            <FormattedMessage {...messages.tech} />
          </HeaderLink>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
