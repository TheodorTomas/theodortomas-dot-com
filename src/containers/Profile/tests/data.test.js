import { icons, bio, contactInfo } from '../data';

describe('data', () => {
  it('should render matching icons snapshot', () => {
    expect(icons).toMatchSnapshot();
  });

  it('should render matching bio snapshot', () => {
    expect(bio).toMatchSnapshot();
  });

  it('should render matching contactInfo snapshot', () => {
    expect(contactInfo).toMatchSnapshot();
  });
});
