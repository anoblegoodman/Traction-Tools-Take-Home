import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './graphql-config/apolloClientInstance';
import { Home } from './components/Home';
import { PastPlaces } from './components/PastPlaces';
import { Continents } from './components/Continents';
import { Continent } from './components/Continent';

// PSA: I'm using Context here simply to avoid prop drilling, which isn't a sound enough justification by itself.
// I just wanted to demonstrate using it since most production level apps have use cases for accessing the same
// data in many components across multiple levels.

export const SavedPlacesContext = React.createContext();

export const App = () => {
  const [pastPlaces, setPastPlaces] = useState({});
  return (
    <ApolloProvider client={client}>
      <SavedPlacesContext.Provider
        value={{
          pastPlaces,
          setPastPlaces
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/past-places" component={PastPlaces} />
            <Route exact path="/continents" component={Continents} />
            <Route exact path="/continents/:continent" component={Continent} />
          </Switch>
        </Router>
      </SavedPlacesContext.Provider>
    </ApolloProvider>
  );
};
