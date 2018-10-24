import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';
import { withRouter } from '../helpers';
import { wrapWithIntlProvider } from '../utils/test-utils';

describe('<Header>', () => {
  it('renders', () => {
    expect(() => {
      return mount(wrapWithIntlProvider(withRouter(<Header />)));
    }).not.toThrow();
  });
});
