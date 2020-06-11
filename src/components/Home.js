import React, { useContext, useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const HomeButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  margin-bottom: 5px;
  padding: 0.25em 1em;
`;

export const Home = () => {
  return (
    <Route
      children={({ history }) => {
        return (
          <div>
            <header>
              <p>Travel Log - let's document your world wide travel</p>
              <HomeButton onClick={() => history.push('/pastplaces')}>
                Where in the world have you been?
              </HomeButton>
              <HomeButton onClick={() => history.push('/futureplaces')}>
                Oh, the places you'll go!
              </HomeButton>
            </header>
          </div>
        );
      }}
    ></Route>
  );
};
