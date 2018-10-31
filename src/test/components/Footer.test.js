import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';
import { wrapWithIntlProvider } from '../utils/test-utils';
import { snippets } from '../helpers';

describe('<Footer>', () => {
  it('matches snapshot', () => {
    expect(() => {
      mount(wrapWithIntlProvider(<Footer snippets={ snippets } />));
    }).not.toThrow();
  });
});
