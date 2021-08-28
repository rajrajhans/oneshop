import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

export default function useCart(productId) {
  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id: productId,
    },
  });

  return { addToCart, loading, error };
}

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
      quantity
      product {
        name
      }
    }
  }
`;
