import React from 'react';
import { mount } from 'enzyme';

import BetaWarning from '../../components/BetaWarning';
import { wrapWithIntlProvider } from '../utils/test-utils';

describe('<BetaWarning>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      wrapWithIntlProvider(
        <BetaWarning />
      )
    );

    expect(wrapper.find(BetaWarning)).toMatchSnapshot();
  });
});
