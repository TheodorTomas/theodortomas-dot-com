import * as ReactGA from 'react-ga';

// Click to action analytics utils
export const CTAAnalytics = ({ category, ...options }) =>
  ReactGA.event({ action: 'Click', category, ...options });
