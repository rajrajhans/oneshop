import React from 'react';
import styled from 'styled-components';
import formatPrice from '../utils/formatPrice';
import { useRouter } from 'next/router';

export const ProductWrapper = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37);
  padding: 20px;
  width: 25%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
    box-shadow: -2px -1px 17px 1px rgba(255, 128, 40, 0.56);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 40px;
  }
  @media only screen and (min-width: 1500px) {
    width: 15%;
  }
`;

export const ProductImage = styled.div`
  margin: 10px 0;
  text-align: center;
  height: 250px;
  display: flex;
  flex-direction: column;

  img {
    max-width: 90%;
    margin: auto;
    max-height: 250px;
    object-fit: cover;
  }
`;

export const ProductDetails = styled.div`
  margin-top: auto;
`;

export const ProductName = styled.div`
  text-align: center;
  font-weight: 700;
  color: #3f3c93;
`;

export const ProductPrice = styled.div`
  text-align: center;
  font-weight: 500;
  color: #3f3c93;
  margin-top: 10px;
`;

const ProductCard = ({ product }) => {
  const router = useRouter();

  return (
    <ProductWrapper
      onClick={() => {
        router.push(`/product/${product.id}`).catch((e) => {
          console.log(e);
        });
      }}
    >
      <ProductImage>
        {
          <img
            src={product?.photo?.image?.publicUrlTransformed}
            alt={product?.photo?.image?.altText}
          />
        }
      </ProductImage>
      <ProductDetails>
        <ProductName>{product.name.substring(0, 25)}</ProductName>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
      </ProductDetails>
    </ProductWrapper>
  );
};

export default ProductCard;
