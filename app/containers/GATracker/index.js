/**
* NOTE: GATracker This is a workaround due to react-ga depending on onUpdate in redux-router before React v16
* Should possibly be replaced when react-ga has updated their package.
* Initializes Google analytics and sends a tracker on page view changes.
*/
import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPathname } from 'containers/App/selectors';
import getTrackerId from './trackerId';

export class GATracker extends React.Component {
  componentDidMount() {
    ReactGA.initialize(getTrackerId(), { debug: false });
    this.track(this.props.pathname);
  }

  componentWillReceiveProps(nextProps) {
    const currentPath = this.props.pathname;
    const nextPath = nextProps.pathname;

    if (currentPath !== nextPath) {
      this.track(nextPath);
    }
  }

  track(pathname) {
    ReactGA.set({ pathname });
    ReactGA.pageview(pathname);
  }

  render() {
    return null;
  }
}

GATracker.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
});

export default connect(mapStateToProps, null)(GATracker);
