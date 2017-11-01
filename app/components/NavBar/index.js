import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import A from '../A';
import Icon from '../Icon';

const Button = styled(A)`
  display: inline-flex;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 12px;

  padding: 1em;
  margin: 0.1em;
`;

const NavBar = () => (
  <Wrapper>
    <Button href="https://linkedin.com/in/TheodorTomas" target="_blank" title="Linkedin"><Icon className="fa fa-linkedin"></Icon></Button>
    <Button href="https://github.com/TheodorTomas" target="_blank" title="Github"><Icon className="fa fa-github"></Icon></Button>
    <Button href="https://twitter.com/TheodorTomas" target="_blank" title="Twitter"><Icon className="fa fa-twitter"></Icon></Button>
  </Wrapper>
);

export default NavBar;
