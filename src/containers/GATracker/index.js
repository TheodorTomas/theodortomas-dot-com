/**
 * Initializes Google analytics and sets the page view to '/'.
 */
import React from 'react';
import * as ReactGA from 'react-ga';
import { TRACKER_ID } from '../../constants/analytics';

export class GATracker extends React.Component {
  componentDidMount() {
    ReactGA.initialize(TRACKER_ID, { debug: false });
    ReactGA.set({ pathname: '/' });
    ReactGA.pageview('/');
  }

  render() {
    return null;
  }
}

export default GATracker;
