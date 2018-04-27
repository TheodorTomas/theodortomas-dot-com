import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import * as ReactGA from 'react-ga'; // Google analytics
import getTrackerId from './containers/GATracker/trackerId';
jest.mock('react-ga');
ReactGA.initialize(getTrackerId(), { debug: false });

configure({ adapter: new Adapter() });
