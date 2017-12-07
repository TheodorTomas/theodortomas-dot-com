/**
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'theodortomas/Container_NAME/ACTION_CONSTANT_NAME';
 */

// todo: move this constant
export const DEFAULT_LOCALE = 'en';

export const COLORS = {
  darkGrey: '#4a4a4a', // Outer Space
  blueGrey: '#95a3b3', // Cadet Grey
  lightGrey: '#d3d3d3', // Cadet Grey
  green: '#78c8b4', // Pearl Aqua
};
