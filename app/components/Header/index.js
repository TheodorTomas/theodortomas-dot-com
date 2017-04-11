import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Button from './Button';
import A from '../A';
import Icon from '../Icon';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <Button>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
        </Button>
        <Button>
          <HeaderLink to="/tech">
            <FormattedMessage {...messages.tech} />
          </HeaderLink>
        </Button>
        <Button>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
        </Button>
        <Button>
          <A href="https://linkedin.com/in/TheodorTomas" target="_blank" title="Linkedin"><Icon className="fa fa-linkedin"></Icon></A>
        </Button>
        <Button>
          <A href="https://github.com/TheodorTomas" target="_blank" title="Github"><Icon className="fa fa-github"></Icon></A>
        </Button>
        <Button>
          <A href="https://twitter.com/TheodorTomas" target="_blank" title="Twitter"><Icon className="fa fa-twitter"></Icon></A>
        </Button>
      </NavBar>
    );
  }
}

export default Header;
