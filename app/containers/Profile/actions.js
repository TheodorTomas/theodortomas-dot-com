/*
 *
 * LanguageProvider actions
 *
 */

import {
  FINISH_INIT_LOAD,
} from './constants';

export function finishLoad() {
  return {
    type: FINISH_INIT_LOAD,
  };
}
