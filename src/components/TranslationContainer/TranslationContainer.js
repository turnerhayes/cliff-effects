import React from 'react';

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

// @todo: remove when using Redux 
const setIsDev = (value) => {
  isDev = !!value;
};

const setLangCode = (lang) => {
  langCode = lang;
};

export default TranslationContainer;

export { setIsDev, setLangCode };
