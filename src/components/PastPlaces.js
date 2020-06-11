import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { SavedPlacesContext } from '../App';

export const PastPlaces = () => {
  const { pastPlaces } = useContext(SavedPlacesContext);
  return (
    <Route
      children={({ history }) => {
        return (
          <>
            <header>Places I've Been</header>
            <div>
              {pastPlaces.length > 0
                ? pastPlaces
                : "You haven't told us where you've been!"}
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
