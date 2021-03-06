import { useState, useEffect } from 'react';

const useForm = (initialState = {}) => {
  const [inputState, setInputState] = useState(initialState);
  const initialValues = Object.values(initialState).join('');

  useEffect(() => {
    setInputState(initialState);
  }, [initialValues]);

  const handleChange = (e) => {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value = e.target.files[0];
    }

    setInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setInputState(initialState);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputState).map(([key, value]) => [key, '']),
    );
    setInputState(blankState);
  };

  return [inputState, handleChange, clearForm, resetForm];
};

export default useForm;
