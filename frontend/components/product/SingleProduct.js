import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import ErrorMessage from '../helpers/ErrorMessage';
import Head from 'next/head';
import CardBg from '../helpers/CardBg';
import PageInfoBar from '../helpers/PageInfoBar';
import styled from 'styled-components';
import formatPrice from '../../utils/formatPrice';
import SingleProductSkeleton from './SingleProductSkeleton';

export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid white;
  border-radius: 20px;
  padding: 20px 50px;
  width: 90%;
  margin: 50px auto;
  background: var(--light);
  box-shadow: -2px 3px 11px -1px rgba(255, 128, 40, 0.56);

  @media only screen and (max-width: 768px) {
    margin: 25px 15px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 15px;
  }
`;

export const ProductName = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--tertiary);
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ProductDescription = styled.div`
  color: #5a5a5a;
`;

export const ProductImage = styled.div`
  width: 50%;
  img {
    max-width: 100%;
    border-radius: 20px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 20px;

    img {
      border-radius: 10px;
    }
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--tertiary);
`;

export const ProductDetailsLeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;
  width: 45%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductNameDesc = styled.div`
  margin-bottom: 20px;
`;

export const HideOnMobile = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SingleProduct = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id,
    },
  });

  if (loading) return <SingleProductSkeleton />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Head>
        <title>{data.Product.name} | oneshop</title>
      </Head>
      <div>
        <CardBg />
        <HideOnMobile>
          <PageInfoBar
            leftText={null}
            middleText={'Product Details'}
            rightComponent={null}
          />
        </HideOnMobile>
      </div>

      <ProductDetailsContainer>
        <ProductDetailsLeftPanel>
          <ProductNameDesc>
            <ProductName>{data.Product.name}</ProductName>
            <ProductDescription>{data.Product.description}</ProductDescription>
          </ProductNameDesc>
          <ProductPrice>{formatPrice(data.Product.price)}</ProductPrice>
        </ProductDetailsLeftPanel>
        <ProductImage>
          <img
            src={data.Product.photo.image.publicUrlTransformed}
            alt={data.Product.photo.altText}
          />
        </ProductImage>
      </ProductDetailsContainer>
    </div>
  );
};

export default SingleProduct;

export const SINGLE_PRODUCT_QUERY = gql`
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
