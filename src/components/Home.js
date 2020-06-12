import React from 'react';
import { Route } from 'react-router-dom';
import { Header, HomeButton, ListWrapper } from '../styles/styles';

export const Home = () => {
  return (
    <>
      <Header>Welcome to Your Travel Diary</Header>
      <Route
        children={({ history }) => {
          return (
            <ListWrapper>
              <HomeButton
                data-testid="homeButton"
                onClick={() => history.push('/past-places')}
              >
                Where in the world have you been?
              </HomeButton>
            </ListWrapper>
          );
        }}
      ></Route>
    </>
  );
};
