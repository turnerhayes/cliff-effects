import React from 'react';
import { localeDefinesMessage } from '../../localization/messages';

let isDev = false;

let langCode = null;

const TranslationContainer = ({ children }) => {
  if (!isDev) {
    return (
      <span>{ children }</span>
    );
  }

  return (
    <span
      lang={ langCode }
      className="snippet">
      { children }
    </span>
  );
};

// @todo: remove if using Redux 
const setIsDev = (value) => {
  isDev = !!value;
};

const setLangCode = (lang) => {
  langCode = lang;
};

export default TranslationContainer;

export { setIsDev, setLangCode };
