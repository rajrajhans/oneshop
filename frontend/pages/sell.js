import React from 'react';
import CreateProductForm from '../components/CreateProductForm';
import CardBg from '../components/CardBg';
import PageInfoBar from '../components/PageInfoBar';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: var(--light);
  padding: 25px;
  border-radius: 25px;
  box-shadow: 0 2px 2px 0 rgba(31, 38, 135, 0.37);
  margin: 40px 50px;

  @media only screen and (max-width: 768px) {
    margin: 40px 10px;
  }
`;

const InnerFormContainer = styled.div`
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Sell = () => {
  return (
    <div>
      <CardBg />
      <PageInfoBar
        leftText={'Add New Products'}
        middleText={'Sell'}
        rightComponent={null}
      />
      <FormContainer>
        <InnerFormContainer>
          <CreateProductForm key={'CreateProductForm'} />
        </InnerFormContainer>
      </FormContainer>
    </div>
  );
};

export default Sell;
