import * as ReactGA from 'react-ga';
import { CTAAnalytics } from '../analytics';

jest.mock('react-ga', () => ({
  event: jest.fn(),
}));

describe('utils/analytics', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call ReactGA.event with correct object', () => {
    const category = 'test-category';
    const label = 'test-label';

    CTAAnalytics({ category, label });

    expect(ReactGA.event).toHaveBeenCalledWith({
      action: 'Click',
      category,
      label,
    });
  });
});
