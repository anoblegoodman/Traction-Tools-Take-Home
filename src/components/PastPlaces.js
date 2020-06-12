import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { SavedPlacesContext } from '../App';
import { CountryTraveledLog } from './CountryTraveledLog';
import { Header, AddPlaceButton, ListWrapper } from '../styles/styles';

export const PastPlaces = () => {
  const { pastPlaces } = useContext(SavedPlacesContext);
  const logs = Object.values(pastPlaces);
  return (
    <>
      <Header>
        Places I've Been
        <Route
          children={({ history }) => {
            return (
              <>
                <br />
                <AddPlaceButton
                  data-testid="addPlaceButton"
                  size="30px"
                  onClick={() => history.push('/continents')}
                ></AddPlaceButton>
              </>
            );
          }}
        />
      </Header>
      <ListWrapper>
        {logs.map(log => {
          return <CountryTraveledLog log={log} />;
        })}
      </ListWrapper>
    </>
  );
};
