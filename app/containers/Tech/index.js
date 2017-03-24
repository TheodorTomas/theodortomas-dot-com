/*
 *
 * Tech
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectTech from './selectors';
import messages from './messages';

export class Tech extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Tech"
          meta={[
            { name: 'description', content: 'Description of Tech' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Tech.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Tech: makeSelectTech(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tech);
