import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';
import HeaderLink from './HeaderLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <HeaderLink to="/about">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
        <HeaderLink to="/tech">
          <FormattedMessage {...messages.tech} />
        </HeaderLink>
        <HeaderLink to="/contact">
          <FormattedMessage {...messages.contact} />
        </HeaderLink>
      </Wrapper>
    );
  }
}

export default Header;
