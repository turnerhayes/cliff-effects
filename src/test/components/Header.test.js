import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';
import { withRouter } from '../helpers';
import { wrapWithIntlProvider } from '../utils/test-utils';
import { snippets } from '../helpers';

describe('<Header>', () => {
  it('renders', () => {
    expect(() => {
      return mount(wrapWithIntlProvider(withRouter(<Header snippets={ snippets } />)));
    }).not.toThrow();
  });
});
