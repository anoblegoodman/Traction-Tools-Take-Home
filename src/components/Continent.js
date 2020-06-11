import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { COUNTRY_QUERY } from '../gql-operations/CountryQuery';
import styled from 'styled-components';
import { BeenHere } from '@styled-icons/boxicons-solid/BeenHere';
import { CountryTraveledLogger } from './CountryTraveledLogger';

const CountriesButton = styled.div`
  left: 0;
  right: 0;
  width: '32%'
  overflow:hidden;
  padding:16px;
  margin: 50px auto;
  box-sizing:border-box;
  z-index:1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background: white;
  border: 0.5px solid #E8E8E8;
`;

const CountriesModal = styled.div`
  max-height: ${props => (props.open ? '100%' : '0')};
  overflow: hidden;
  padding: ${props => (props.open ? '25px 0' : '0')};
  transition: all 0.3s ease-out;
`;

export const Continent = props => {
  const [selectedCountries, setSelectedCountries] = useState({
    selected: false,
    country: ''
  });
  const code = props.history.location.state.continentCode;
  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { code }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <header>Countries</header>
      <CountriesButton onClick={() => props.history.goBack()}>
        Go Back to Continent List
      </CountriesButton>
      <CountriesButton onClick={() => props.history.push('/pastPlaces')}>
        Jump To Travel Log
      </CountriesButton>
      {data.continent.countries.map((country, index) => {
        return <CountryTraveledLogger name={country.name} />;
      })}
    </div>
  );
};
