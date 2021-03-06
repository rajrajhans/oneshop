import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import { SINGLE_PRODUCT_QUERY } from './SingleProduct';
import useForm from '../../utils/useForm';
import { useLoadingContext } from '../helpers/LoadingContext';
import StyledForm from '../helpers/StyledForm';
import ErrorMessage from '../helpers/ErrorMessage';
import Skeleton from 'react-loading-skeleton';

const UpdateProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id: id },
  });

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    refetchQueries: ['PRODUCT_QUERY', 'AllProductsQuery'],
  });

  const [inputs, handleChange, resetForm] = useForm(data?.Product);
  const { toggleIsLoading } = useLoadingContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct({
      variables: {
        id,
        name: inputs.name,
        description: inputs.description,
        price: inputs.price,
      },
    })
      .then(() => {
        router.push('/shop').catch((e) => console.log(e));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    updateLoading ? toggleIsLoading(true) : toggleIsLoading(false);
  }, [updateLoading]);

  if (loading) return <Skeleton count={1} />;

  return (
    <div>
      <ErrorMessage error={error || updateError} />

      <StyledForm onSubmit={handleSubmit}>
        <fieldset disabled={updateLoading}>
          <div className="form-input">
            <label htmlFor={'name'}>Name</label>
            <input
              type={'text'}
              id={'name'}
              required={true}
              name={'name'}
              placeholder={'What should the product be called?'}
              value={inputs.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor={'price'}>Price </label>
            <input
              type={'number'}
              id={'price'}
              name={'price'}
              required={true}
              placeholder={'Product listing price'}
              value={inputs.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor={'description'}>Product Description</label>
            <textarea
              id={'description'}
              required={true}
              name={'description'}
              placeholder={'Describe the salient features of the product'}
              value={inputs.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <input type={'submit'} value={'Update Product'} />
          </div>
        </fieldset>
      </StyledForm>
    </div>
  );
};

export default UpdateProduct;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      price
      name
    }
  }
`;
