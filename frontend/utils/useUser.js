// custom hook for getting the current logged in user's details

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  if (!data?.authenticatedItem) {
    return {
      data: {
        authenticatedItem: {
          id: '6176afe3c0dc2d002c666746',
          email: 'demo@rajrajhans.com',
          name: 'Raj',
          cart: [],
        },
      },
    };
  }

  return data?.authenticatedItem;
}

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name

        cart {
          id
          quantity
          product {
            id
            name
            description
            price
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;
