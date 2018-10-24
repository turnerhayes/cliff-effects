import React from 'react';
import { mount } from 'enzyme';

import HomePage from '../../containers/HomePage';
import { withRouter } from '../helpers';
import { wrapWithIntlProvider } from '../utils/test-utils';

describe('<HomePage>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(wrapWithIntlProvider(withRouter(<HomePage />)));

    expect(wrapper.children()).toMatchSnapshot();
  });
});
