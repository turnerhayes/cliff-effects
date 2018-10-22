import React from 'react';
import { mount } from 'enzyme';

import { AboutContent } from '../../components/AboutContent';

describe('<AboutContent>', () => {
  it('renders', () => {
    expect(() => {
      mount(<AboutContent />);
    }).not.toThrow();
  });
});
