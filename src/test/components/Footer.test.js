import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

describe('<Footer>', () => {
  it('matches snapshot', () => {
    expect(mount(<Footer />)).toMatchSnapshot();
  });
});
