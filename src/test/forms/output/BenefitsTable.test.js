import React from 'react';
import { mount } from 'enzyme';
import { cloneDeep, set } from 'lodash';
import { intlShape } from 'react-intl';

import BenefitsTable from '../../../forms/output/BenefitsTable';
import { CLIENT_DEFAULTS } from '../../../utils/CLIENT_DEFAULTS';
import { intl } from '../../utils/test-utils';

const buildWrapper = (client) => {
  const wrapper = mount(
    (
      <BenefitsTable 
        client={ client } />
    ),
    {
      context: { intl },

      childContextTypes: { intl: intlShape },
    }
  );

  return wrapper;
};

test('Benefits table renders correctly', () => {
  const client = cloneDeep(CLIENT_DEFAULTS);
  expect(buildWrapper(client)).toMatchSnapshot();

  set(client, 'current.hasSnap', true);
  expect(buildWrapper(client)).toMatchSnapshot();

  set(client, 'current.earned', 100);
  expect(buildWrapper(client)).toMatchSnapshot();

  set(client, 'future.earned', 200);
  expect(buildWrapper(client)).toMatchSnapshot();

  set(client, 'current.earned', 300);
  expect(buildWrapper(client)).toMatchSnapshot();

  set(client, 'current.hasSection8');
  expect(buildWrapper(client)).toMatchSnapshot();

  set(client, 'future.earned', 400);
  expect(buildWrapper(client)).toMatchSnapshot();
});
