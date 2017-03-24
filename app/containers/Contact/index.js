/*
 *
 * Contact
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContact from './selectors';
import messages from './messages';

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Description of Contact' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Contact: makeSelectContact(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
