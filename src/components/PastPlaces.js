import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { SavedPlacesContext } from '../App';
import { CountryTraveledLog } from './CountryTraveledLog';

export const PastPlaces = () => {
  const { pastPlaces } = useContext(SavedPlacesContext);
  const logs = Object.values(pastPlaces);
  return (
    <>
      <header>Places I've Been</header>
      {logs.length === 0 && (
        <Route
          children={({ history }) => {
            return (
              <>
                <button onClick={() => history.push('/continents')}>
                  Add Place
                </button>
              </>
            );
          }}
        ></Route>
      )}
      {logs.map(log => {
        return <CountryTraveledLog log={log} />;
      })}
    </>
  );
};
