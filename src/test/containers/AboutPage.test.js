import React from 'react';
import { mount } from 'enzyme';

import AboutPage from '../../containers/AboutPage';

describe('<AboutPage>', () => {
  it('renders', () => {
    expect(() => {
      return mount(<AboutPage />);
    }).not.toThrow();
  });
});
