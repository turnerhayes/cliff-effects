import React from 'react';
import renderer from 'react-test-renderer';
import { cloneDeep, set } from 'lodash';

import BenefitsTable from '../../../forms/output/BenefitsTable';
import { CLIENT_DEFAULTS } from '../../../utils/CLIENT_DEFAULTS';
import { wrapWithIntlProvider } from '../../utils/test-utils';


const buildSnapshot = (client) => {
  const rendered = renderer.create(
    wrapWithIntlProvider(
      <BenefitsTable 
        client={ client } />
    )
  );

  return rendered.toJSON();
};

test('Benefits table renders correctly', () => {
  const client = cloneDeep(CLIENT_DEFAULTS);
  expect(buildSnapshot(client)).toMatchSnapshot();

  set(client, 'current.hasSnap', true);
  expect(buildSnapshot(client)).toMatchSnapshot();

  set(client, 'current.earned', 100);
  expect(buildSnapshot(client)).toMatchSnapshot();

  set(client, 'future.earned', 200);
  expect(buildSnapshot(client)).toMatchSnapshot();

  set(client, 'current.earned', 300);
  expect(buildSnapshot(client)).toMatchSnapshot();

  set(client, 'current.hasSection8');
  expect(buildSnapshot(client)).toMatchSnapshot();

  set(client, 'future.earned', 400);
  expect(buildSnapshot(client)).toMatchSnapshot();
});
