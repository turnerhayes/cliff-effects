import React from 'react';
import { IntlProvider } from 'react-intl';

import enMessages from '../../localization/messages/en';

const intlProviderProps = {
  locale:   'en',
  messages: enMessages,
};

export const wrapWithIntlProvider = (component) => {
  return (
    <IntlProvider
      { ...intlProviderProps }>
      {component}
    </IntlProvider>
  );
};

const intlProvider = new IntlProvider(intlProviderProps, {});

export const { intl } = intlProvider.getChildContext();
