import React from 'react';
import SingleProduct from '../../components/SingleProduct';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <SingleProduct id={id} />
    </div>
  );
};

export default ProductPage;
