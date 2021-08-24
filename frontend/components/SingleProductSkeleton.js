import React from 'react';
import Head from 'next/head';
import CardBg from './CardBg';
import PageInfoBar from './PageInfoBar';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import {
  HideOnMobile,
  ProductDescription,
  ProductDetailsContainer,
  ProductDetailsLeftPanel,
  ProductImage,
  ProductName,
  ProductNameDesc,
  ProductPrice,
} from './SingleProduct';

const SingleProductSkeleton = () => {
  return (
    <div>
      <Head>
        <title>oneshop</title>
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
            <ProductName>
              <Skeleton count={1} />
            </ProductName>
            <ProductDescription>
              <Skeleton count={3} />
            </ProductDescription>
          </ProductNameDesc>
          <ProductPrice>
            <Skeleton count={1} />
          </ProductPrice>
        </ProductDetailsLeftPanel>
        <ProductImage>
          <Skeleton height={260} />
        </ProductImage>
      </ProductDetailsContainer>
    </div>
  );
};

export default SingleProductSkeleton;
