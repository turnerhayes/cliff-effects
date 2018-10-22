import React from 'react';
import { shallow } from 'enzyme';

import HouseholdStep from '../../forms/Household';

import { CLIENT_DEFAULTS } from '../../utils/CLIENT_DEFAULTS';

test('Household step component renders as snapshot correctly', () => {
  const navData = {
          left:   { text: 'Previous', onClick: jest.fn() },
          middle: null,
          right:  { text: 'Next', onClick: jest.fn() },
        },
        updateClientValue     = jest.fn(),
        saveForm         = jest.fn(),
        askToResetClient = jest.fn(),
        openFeedback     = jest.fn();

  const wrapper = shallow(
    <HouseholdStep
      currentStep       = { 2 }
      client            = { CLIENT_DEFAULTS }
      navData           = { navData }
      updateClientValue      = { updateClientValue }
      saveForm          = { saveForm }
      askToResetClient  = { askToResetClient }
      openFeedback      = { openFeedback } />
  );

  expect(wrapper).toMatchSnapshot();
});
