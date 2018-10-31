import React from 'react';
import { mount } from 'enzyme';

import { MainMenu } from '../../components/MainMenu';
import { withRouter } from '../helpers';
import { wrapWithIntlProvider } from '../utils/test-utils';
import { snippets } from '../helpers';

describe('<MainMenu>', () => {
  it('renders', () => {
    expect(() => {
      return mount(wrapWithIntlProvider(withRouter(<MainMenu snippets={ snippets } />)));
    }).not.toThrow();
  });
});
