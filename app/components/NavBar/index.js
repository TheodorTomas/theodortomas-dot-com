import React from 'react';

import Wrapper from './Wrapper';
import Button from './Button';
import A from '../A';
import Icon from '../Icon';

const NavBar = () => (
  <Wrapper>
    <Button>
      <A href="https://linkedin.com/in/TheodorTomas" target="_blank" title="Linkedin"><Icon className="fa fa-linkedin"></Icon></A>
    </Button>
    <Button>
      <A href="https://github.com/TheodorTomas" target="_blank" title="Github"><Icon className="fa fa-github"></Icon></A>
    </Button>
    <Button>
      <A href="https://twitter.com/TheodorTomas" target="_blank" title="Twitter"><Icon className="fa fa-twitter"></Icon></A>
    </Button>
  </Wrapper>
);

export default NavBar;
