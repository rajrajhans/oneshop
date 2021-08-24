import React from 'react';
import UpdateProductForm from '../components/UpdateProductForm';
import CardBg from '../components/CardBg';
import PageInfoBar from '../components/PageInfoBar';
import { FormContainer, InnerFormContainer } from './sell';
import styled from 'styled-components';

const UpdateProductText = styled.div`
  margin-bottom: 40px;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
`;

const UpdateProductPage = () => {
  return (
    <div>
      <CardBg />
      <PageInfoBar
        leftText={'Update Product Details'}
        middleText={null}
        rightComponent={null}
      />
      <FormContainer>
        <InnerFormContainer>
          <UpdateProductText>
            Please enter updated product details in the form below.
          </UpdateProductText>
          <UpdateProductForm />
        </InnerFormContainer>
      </FormContainer>
    </div>
  );
};

export default UpdateProductPage;
