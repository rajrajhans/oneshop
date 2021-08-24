import React, { useEffect } from 'react';
import useForm from '../utils/useForm';
import styled from 'styled-components';
import StyledForm from './StyledForm';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import { useLoadingContext } from './LoadingContext';
import { ALL_PRODUCTS_QUERY } from '../pages/shop';

const CreateProductDetails = styled.div`
  margin-bottom: 40px;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
`;

const CreateProductForm = () => {
  const initialState = { name: '', price: '', description: '', image: '' };
  const [inputs, handleChange, resetForm] = useForm(initialState);
  const { toggleIsLoading } = useLoadingContext();

  const [createProduct, { data, error, loading }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    },
  );

  useEffect(() => {
    loading ? toggleIsLoading(true) : toggleIsLoading(false);
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
    resetForm();
  };

  return (
    <div>
      <ErrorMessage error={error} />
      <CreateProductDetails>
        To add products to the oneshop inventory, please enter all the product
        details in the form below.
      </CreateProductDetails>

      <StyledForm onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
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
            <label htmlFor={'image'}>Product Image</label>
            <input
              type={'file'}
              id={'image'}
              required={true}
              name={'image'}
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
            <input type={'submit'} value={'Add Product'} />
          </div>
        </fieldset>
      </StyledForm>
    </div>
  );
};

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
    }
  }
`;

export default CreateProductForm;
