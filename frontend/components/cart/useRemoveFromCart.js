import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

export default function useRemoveFromCart(id) {
  const [deleteCartItem, { error, loading }] = useMutation(DELETE_CART_ITEM, {
    variables: {
      id: id,
    },
    refetchQueries: ['CURRENT_USER_QUERY'],
  });

  return { deleteCartItem, error, loading };
}

const DELETE_CART_ITEM = gql`
  mutation DELETE_CART_ITEM($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
