/**
 * Initializes Google analytics and sets the page view to '/'.
 */
import React from 'react';
import * as ReactGA from 'react-ga';
import getTrackerId from './trackerId';

export class GATracker extends React.Component {
  componentDidMount() {
    ReactGA.initialize(getTrackerId(), { debug: true });
    ReactGA.set({ pathname: '/' });
    ReactGA.pageview('/');
  }

  render() {
    return null;
  }
}

export default GATracker;
