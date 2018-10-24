import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';
import { wrapWithIntlProvider } from '../utils/test-utils';

describe('<Footer>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      wrapWithIntlProvider(
        <Footer />
      )
    );

    expect(wrapper.find(Footer)).toMatchSnapshot();
  });
});
