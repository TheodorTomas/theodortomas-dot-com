/*
 *
 * About
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import AboutWrapper from './AboutWrapper';

export class About extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AboutWrapper>
        <Helmet
          title="About"
          meta={[
            { name: 'description', content: 'Description of About' },
          ]}
        />
      </AboutWrapper>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(About);
