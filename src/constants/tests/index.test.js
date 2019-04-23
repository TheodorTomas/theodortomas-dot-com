import analytics from '../analytics';

describe('constants/analytics', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should render matching snapshot when not in production', () => {
    expect(analytics).toMatchSnapshot();
  });

  it('should render matching snapshot when in production', () => {
    process.env.NODE_ENV = 'production';
    const productionAnalytics = require('../analytics').default; // eslint-disable-line global-require

    expect(productionAnalytics).toMatchSnapshot();
  });
});
