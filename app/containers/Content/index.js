/*
 *
 * Content
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContent from './selectors';
import messages from './messages';

import Welcome from '../Welcome';
import About from '../About';

export class Content extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Content"
          meta={[
            { name: 'description', content: 'Description of Content' },
          ]}
        />
        <Welcome />
        <About />
      </div>
    );
  }
}

Content.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Content: makeSelectContent(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
