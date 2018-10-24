import React from 'react';
import { mount } from 'enzyme';

import AboutPage from '../../containers/AboutPage';
import { wrapWithIntlProvider } from '../utils/test-utils';

describe('<AboutPage>', () => {
  it('renders', () => {
    expect(() => {
      return mount(wrapWithIntlProvider(<AboutPage />));
    }).not.toThrow();
  });
});
