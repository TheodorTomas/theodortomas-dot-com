import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { changeLocale } from '../LanguageProvider/actions';

const checkForDanish = (locale) => (locale === 'dk' ? 'da' : locale); // this API returns dk instead of da

export function* getGeoLocale() {
  const requestURL = 'https://freegeoip.net/json/';

  try {
    const res = yield call(request, requestURL);
    const locale = checkForDanish(res.country_code.toLowerCase());
    yield put(changeLocale(locale));
  } catch (err) {
    yield put(err);
  }
}

export default function* rootSaga() {
  yield getGeoLocale();
}

