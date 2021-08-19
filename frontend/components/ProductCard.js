import React from 'react';
import styled from 'styled-components';
import formatPrice from '../utils/formatPrice';

const ProductWrapper = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37);
  padding: 20px;
  width: 25%;
  margin: 40px;
`;

const ProductImage = styled.div`
  margin: 10px 0;
  text-align: center;

  img {
    max-width: 90%;
  }
`;

const ProductName = styled.div`
  text-align: center;
  font-weight: 700;
  color: #3f3c93;
`;

const ProductPrice = styled.div`
  text-align: center;
  font-weight: 500;
  color: #3f3c93;
  margin-top: 10px;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductWrapper>
      <ProductImage>
        {
          <img
            src={product?.photo?.image?.publicUrlTransformed}
            alt={product?.photo?.image?.altText}
          />
        }
      </ProductImage>
      <ProductName>{product.name.substring(0, 25)}</ProductName>
      <ProductPrice>{formatPrice(product.price)}</ProductPrice>
    </ProductWrapper>
  );
};

export default ProductCard;
