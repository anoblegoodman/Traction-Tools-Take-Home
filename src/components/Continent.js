import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { COUNTRY_QUERY } from '../gql-operations/CountryQuery';
import { CountryTraveledLogger } from './CountryTraveledLogger';
import { ButtonSm, Header, LoadingIcon, ListWrapper } from '../styles/styles';

export const Continent = props => {
  const code = props.history.location.state.continentCode;
  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { code }
  });
  if (loading) return <LoadingIcon size="300px" />;
  if (error) return <p>Error</p>;

  return (
    <div>
      <Header>Countries</Header>
      <ButtonSm data-testid="backButton" onClick={() => props.history.goBack()}>
        Go Back to Continent List
      </ButtonSm>
      <ButtonSm
        data-testid="jumpToTravel"
        onClick={() => props.history.push('/past-places')}
      >
        Jump To Travel Log
      </ButtonSm>
      <ListWrapper>
        {data.continent.countries.map((country, i) => {
          return (
            <CountryTraveledLogger key={`country${i}`} name={country.name} />
          );
        })}
      </ListWrapper>
    </div>
  );
};
