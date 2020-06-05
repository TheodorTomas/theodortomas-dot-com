/**
 * Initializes Google analytics and sets the page view to '/'.
 */
import { useEffect } from 'react';
import * as ReactGA from 'react-ga';
import { TRACKER_ID } from '../../constants';

export default () =>
  useEffect(() => {
    ReactGA.initialize(TRACKER_ID, { debug: false });
    ReactGA.set({ pathname: '/' });
    ReactGA.pageview('/');
  }, []);
