import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './graphql-config/apolloClientInstance';
import { Home } from './components/Home';
import { PastPlaces } from './components/PastPlaces';
import { Continents } from './components/Continents';
import { FuturePlaces } from './components/FuturePlaces';
import { Continent } from './components/Continent';

export const SavedPlacesContext = React.createContext();
//PSA: I'm using Context here simply to avoid prop drilling, but this isn't a necessary use case for Context.
//I just wanted to demonstrate using it since most production level apps have use cases for accessing the same
//data in many components across multiple levels.

export const App = () => {
  const [pastPlaces, setPastPlaces] = useState([]);
  const [futurePlaces, setFuturePlaces] = useState([]);
  return (
    <ApolloProvider client={client}>
      <SavedPlacesContext.Provider
        value={{
          pastPlaces,
          setPastPlaces,
          futurePlaces,
          setFuturePlaces
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pastplaces" component={PastPlaces} />
            <Route exact path="/futureplaces" component={FuturePlaces} />
            <Route exact path="/continents" component={Continents} />
            <Route exact path="/continents/:continent" component={Continent} />
          </Switch>
        </Router>
      </SavedPlacesContext.Provider>
    </ApolloProvider>
  );
};
