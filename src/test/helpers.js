import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const initialEntries = [
  {
    pathname: '/',
    key:      'testKey',
  },
];

export const withRouter = (node) => {
  return (
    <MemoryRouter initialEntries={ initialEntries }>
      {node}
    </MemoryRouter>
  );
};
