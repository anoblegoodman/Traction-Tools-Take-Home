import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import TestRenderer from 'react-test-renderer';
import { CONTINENTS_QUERY } from '../gql-operations/ContinentsQuery';
import { Continents } from './Continents';

const defaultMocks = [
  {
    request: {
      query: CONTINENTS_QUERY
    },
    result: {
      data: {
        continents: [
          {
            code: 'AF',
            name: 'Africa'
          }
        ]
      }
    }
  }
];

describe('<Continents />', () => {
  it('should match snapshot when there are continents', async () => {
    const json = TestRenderer.create(
      <MemoryRouter>
        <MockedProvider addTypename={false} mocks={defaultMocks}>
          <Continents />
        </MockedProvider>
      </MemoryRouter>
    );
    await wait(1);
    await expect(json).toMatchSnapshot();
  });
});
