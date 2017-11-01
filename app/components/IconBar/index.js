/**
 * Renders an IconLink, enforcing the usage of the className, href and title tag
 * with a default target of _blank. Depends on title to find the hover and active colors.
 */
import React from 'react';

import Wrapper from './Wrapper';
import IconLink from './IconLink';

const IconBar = () => (
  <Wrapper>
    <IconLink href="https://linkedin.com/in/TheodorTomas" title="Linkedin" className="fa fa-linkedin" />
    <IconLink href="https://github.com/TheodorTomas" title="Github" className="fa fa-github" />
    <IconLink href="https://twitter.com/TheodorTomas" title="Twitter" className="fa fa-twitter" />
  </Wrapper>
);

export default IconBar;
