import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import CardBg from '../../components/CardBg';
import PageInfoBar from '../../components/PageInfoBar';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import ProductCardSkeleton from '../../components/ProductCardSkeleton';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';
import { ProductsPerPage } from '../../config';
import ErrorMessage from '../../components/ErrorMessage';
import Search from '../../components/Search';

const StyledVerticalText = styled.div`
  writing-mode: vertical-lr;
  transform: scale(-1);
  font-size: 1rem;

  position: absolute;
  top: 43vh;
  height: 250px;
  letter-spacing: 3px;

  :before {
    display: inline-block;
    content: '';
    border-bottom: 0.1rem solid black;
    width: 3rem;
    margin: 0 1rem;
    transform: rotate(90deg) translateX(-2rem);
  }

  @media only screen and (max-width: 768px) {
    margin-left: -30px;
  }
`;

const StyledPageDecorationContainer = styled.div`
  position: relative;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ShopTopSection = () => (
  <StyledPageDecorationContainer>
    <CardBg />
    <PageInfoBar
      leftText={'All Products'}
      middleText={'Shop'}
      RightComponent={<Search />}
    />
    <StyledVerticalText>Scroll down for more</StyledVerticalText>
  </StyledPageDecorationContainer>
);

const Shop = () => {
  const { query } = useRouter();
  const page = parseInt(query.page);

  const skipValue = page ? (page - 1) * ProductsPerPage : 0;

  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: skipValue,
      productsPerPage: ProductsPerPage,
    },
  });

  if (loading) {
    return <ShopLoading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <ShopTopSection />
      <ProductsContainer>
        {data.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
      <Pagination page={page || 1} />
    </div>
  );
};

export default Shop;

// $skip is the number of products we need to skip (ex. if perPage is 3, and we are on page 2,
// then we need to skip first 3 products, if we on page 3

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery($skip: Int = 0, $productsPerPage: Int!) {
    allProducts(first: $productsPerPage, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ShopLoading = () => (
  <div>
    <ShopTopSection />
    <ProductsContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
        <ProductCardSkeleton key={id} />
      ))}
    </ProductsContainer>
  </div>
);
