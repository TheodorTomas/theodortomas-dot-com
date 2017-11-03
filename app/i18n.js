/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import isLocaleData from 'react-intl/locale-data/is';
import daLocaleData from 'react-intl/locale-data/da';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import enTranslationMessages from './translations/en.json';
import isTranslationMessages from './translations/is.json';
import daTranslationMessages from './translations/da.json';

export const appLocales = [
  'en',
  'is',
  'da',
];

addLocaleData(enLocaleData);
addLocaleData(isLocaleData);
addLocaleData(daLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  is: formatTranslationMessages('is', isTranslationMessages),
  da: formatTranslationMessages('da', daTranslationMessages),
};
