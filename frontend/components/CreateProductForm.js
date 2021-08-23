import React from 'react';
import useForm from '../utils/useForm';
import styled from 'styled-components';
import StyledForm from './StyledForm';

const CreateProductDetails = styled.div`
  margin-bottom: 40px;
  font-size: 1.1rem;
  font-weight: 400;
`;

const CreateProductForm = () => {
  const initialState = { name: '', price: '', description: '', image: '' };
  const [inputs, handleChange] = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <CreateProductDetails>
        To add products to the oneshop inventory, please enter all the product
        details in the form below.
      </CreateProductDetails>

      <StyledForm onSubmit={handleSubmit}>
        <fieldset>
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

export default CreateProductForm;
