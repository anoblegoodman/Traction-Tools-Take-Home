import React, { useContext, useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { COUNTRY_QUERY } from '../gql-operations/CountryQuery';

export const FuturePlaces = () => {
  const [futurePlaces, setFuturePlaces] = useState({});
  return (
    <Route
      children={({ history }) => {
        return (
          <>
            <header>Places I Want To Go</header>
            <div>
              {futurePlaces.length > 0
                ? futurePlaces
                : "You haven't told us where you'd like to go!"}
            </div>
            <button onClick={() => history.push('/continents')}>
              Add Place
            </button>
          </>
        );
      }}
    ></Route>
  );
};
