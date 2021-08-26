import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import CardBg from '../../components/CardBg';
import PageInfoBar from '../../components/PageInfoBar';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import ProductCardSkeleton from '../../components/ProductCardSkeleton';
import Pagination from '../../components/Pagination';

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
      rightComponent={null}
    />
    <StyledVerticalText>Scroll down for more</StyledVerticalText>
  </StyledPageDecorationContainer>
);

const Shop = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);

  if (loading) {
    return <ShopLoading />;
  }

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  return (
    <div>
      <ShopTopSection />
      <ProductsContainer>
        {data.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
      <Pagination page={1} />
    </div>
  );
};

export default Shop;

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    allProducts {
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
