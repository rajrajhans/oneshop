import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import ErrorMessage from './ErrorMessage';
import Head from 'next/head';

const SingleProduct = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id,
    },
  });

  if (loading) return <p>LOADING</p>;

  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Head>
        <title>{data.Product.name} | oneshop</title>
      </Head>
      {data.Product.name}
    </div>
  );
};

export default SingleProduct;

const SINGLE_PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
