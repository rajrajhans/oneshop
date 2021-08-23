import Skeleton from 'react-loading-skeleton';
import React from 'react';
import {
  ProductDetails,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductWrapper,
} from './ProductCard';

const ProductCardSkeleton = () => {
  return (
    <ProductWrapper>
      <ProductImage>
        <Skeleton width={250} height={180} />
      </ProductImage>
      <ProductDetails>
        <ProductName>
          <Skeleton count={1} />
        </ProductName>
        <ProductPrice>
          <Skeleton count={1} />
        </ProductPrice>
      </ProductDetails>
    </ProductWrapper>
  );
};

export default ProductCardSkeleton;
