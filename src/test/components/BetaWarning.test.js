import React from 'react';
import { mount } from 'enzyme';

import BetaWarning from '../../components/BetaWarning';
import { wrapWithIntlProvider } from '../utils/test-utils';

describe('<BetaWarning>', () => {
  it('renders', () => {
    expect(() => {
      mount(
        wrapWithIntlProvider(
          <BetaWarning />
        )
      );
    }).not.toThrow();
  });
});
