import { gql } from 'apollo-boost';

export const COUNTRY_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        name
        capital
        emoji
        languages {
          name
        }
      }
    }
  }
`;
