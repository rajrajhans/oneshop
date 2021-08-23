import React from 'react';
import useForm from '../utils/useForm';

const CreateProductForm = () => {
  const initialState = { name: '', price: '', description: '' };
  const [inputs, handleChange] = useForm(initialState);

  return (
    <form>
      <label htmlFor={'name'}>
        Name
        <input
          type={'text'}
          id={'name'}
          name={'name'}
          placeholder={'Product Name'}
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={'price'}>
        Price
        <input
          type={'text'}
          id={'price'}
          name={'price'}
          placeholder={'Price'}
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default CreateProductForm;
