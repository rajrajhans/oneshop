import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useLoadingContext } from '../helpers/LoadingContext';
import { ProductButton } from './ProductCard';

function evictProductFromCache(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

const DeleteProduct = ({ id, children }) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update: evictProductFromCache,
  });

  const { toggleIsLoading } = useLoadingContext();

  const handleClick = async () => {
    if (confirm('Are you sure you want to delete this item?')) {
      toggleIsLoading(true);
      const res = await deleteProduct().catch((e) => {
        console.log(e);
      });
      console.log(res);
      toggleIsLoading(false);
      alert('Product successfully deleted');
    }
  };

  return (
    <>
      <ProductButton right={true} onClick={handleClick}>
        {children}
      </ProductButton>
    </>
  );
};

export default DeleteProduct;

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
