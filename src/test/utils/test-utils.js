import { IntlProvider } from 'react-intl';

const intlProvider = new IntlProvider({ locale: 'en' }, {});

const { intl } = intlProvider.getChildContext();

export { intl };
