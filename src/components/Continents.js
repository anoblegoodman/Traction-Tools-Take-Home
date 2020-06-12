import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Route } from 'react-router-dom';
import { CONTINENTS_QUERY } from '../gql-operations/ContinentsQuery.js';
import {
  ContinentsButton,
  Header,
  LoadingIcon,
  ListWrapper
} from '../styles/styles';

export const Continents = () => {
  const { loading, error, data } = useQuery(CONTINENTS_QUERY);

  if (loading) return <LoadingIcon size="300px" />;
  if (error) return <p>Error</p>;
  if (!data) return null;

  return (
    <div>
      <Header>Choose your continent</Header>
      <ListWrapper>
        {data.continents.map((continent, i) => (
          <Route
            key={`continent${i}`}
            children={({ history }) => {
              return (
                <ContinentsButton
                  data-testid={`${continent.name}`}
                  onClick={() =>
                    history.push({
                      pathname: `${history.location.pathname}/${continent.name}`,
                      state: { continentCode: continent.code }
                    })
                  }
                >{`${continent.name}`}</ContinentsButton>
              );
            }}
          ></Route>
        ))}
      </ListWrapper>
    </div>
  );
};
