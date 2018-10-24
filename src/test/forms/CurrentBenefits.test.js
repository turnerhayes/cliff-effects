import React from 'react';
import { shallow } from 'enzyme';

import CurrentBenefitsStep from '../../forms/CurrentBenefits';

import { CLIENT_DEFAULTS } from '../../utils/CLIENT_DEFAULTS';
import { wrapWithIntlProvider } from '../utils/test-utils';


test('Benefits step component renders as snapshot correctly', () => {
  const navData = {
          left:   null,
          middle: null,
          right:  { text: 'Next', onClick: jest.fn() },
        },
        updateClientValue     = jest.fn(),
        saveForm         = jest.fn(),
        askToResetClient = jest.fn(),
        openFeedback     = jest.fn();

  const wrapper = shallow(
    wrapWithIntlProvider(
      <CurrentBenefitsStep
        currentStep       = { 1 }
        client            = { CLIENT_DEFAULTS }
        navData           = { navData }
        updateClientValue = { updateClientValue }
        saveForm          = { saveForm }
        askToResetClient  = { askToResetClient }
        openFeedback      = { openFeedback } />
    )
  );

  expect(wrapper.find(CurrentBenefitsStep)).toMatchSnapshot();
});
