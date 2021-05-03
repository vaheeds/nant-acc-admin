// Configure RTL theme and Farsi setup
import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = { fa: farsiMessages };
export const i18nProvider = polyglotI18nProvider(
  (locale) => messages[locale],
  'fa'
);
