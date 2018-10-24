import en from './en';
import es from './es';
import de from './de';
import vi from './vi';
import zh from './zh';

const mergeLocales = (localeMessages) => {
  return Object.assign({}, en, localeMessages);
};

export const DEFAULT_LOCALE = 'en';

const localeMessages = {
  en,
  es,
  de,
  vi,
  zh,
};

const validLocales = Object.keys(localeMessages);


export const getMessages = ({ locale }) => {
  if (!(locale in localeMessages)) {
    throw new Error(`Locale ${locale} not found; valid locales are: ${validLocales.join(', ')}`);
  }

  return mergeLocales(localeMessages[ locale ]);
};
