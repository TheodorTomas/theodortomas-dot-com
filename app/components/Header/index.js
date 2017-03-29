import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <section>
          <FormattedMessage {...messages.defaultMessage} />
        </section>
      </Wrapper>
    );
  }
}

export default Header;
