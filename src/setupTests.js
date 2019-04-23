import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import * as ReactGA from 'react-ga'; // Google analytics
import { TRACKER_ID } from './constants/analytics';

jest.mock('react-ga');
ReactGA.initialize(TRACKER_ID, { debug: false });

configure({ adapter: new Adapter() });
