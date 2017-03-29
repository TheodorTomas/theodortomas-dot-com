import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.defaultMessage} />
      </section>
    </Wrapper>
  );
}

export default Footer;
