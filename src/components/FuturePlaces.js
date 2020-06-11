import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { SavedPlacesContext } from '../App';

export const FuturePlaces = () => {
  const { futurePlaces } = useContext(SavedPlacesContext);
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
