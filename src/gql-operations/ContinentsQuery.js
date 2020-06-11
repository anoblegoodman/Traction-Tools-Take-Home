import { gql } from 'apollo-boost';

export const CONTINENTS_QUERY = gql`
  {
    continents {
      code
      name
    }
  }
`;
