import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Route } from 'react-router-dom';
import { CONTINENTS_QUERY } from '../gql-operations/ContinentsQuery.js';
import styled from 'styled-components';

const ContinentsButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  margin-bottom: 5px;
  padding: 0.25em 1em;
`;

export const Continents = () => {
  const { loading, error, data } = useQuery(CONTINENTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <header>Choose your continent</header>{' '}
      {data.continents.map(continent => (
        <Route
          children={({ history }) => {
            return (
              <ContinentsButton
                onClick={() =>
                  history.push({
                    pathname: `${history.location.pathname}/${continent.name}`,
                    state: { continentCode: continent.code }
                  })
                }
              >{`${continent.name}`}</ContinentsButton>
            );
          }}
        ></Route>
      ))}
    </div>
  );
};
