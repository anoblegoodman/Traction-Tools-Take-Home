import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { COUNTRY_QUERY } from '../gql-operations/CountryQuery';
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

export const Continent = props => {
  console.log('incoming', props);
  const code = props.history.location.state.continentCode;
  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { code }
  });
  console.log('data', data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>WHATTTTT</div>;
};
