import React from 'react';
import ReactDOM from 'react-dom';
import areIntlLocalesSupported from 'intl-locales-supported';

import './index.css';
import './styles/dev.css';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const supportedAppLocales = [];

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
};

if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(supportedAppLocales)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    var IntlPolyfill    = require('intl');
    Intl.NumberFormat   = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require('intl');
}

render();

