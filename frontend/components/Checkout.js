import React from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { ProductButton } from './ProductCard';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .StripeElement {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .__PrivateStripeElement {
    flex: 1;
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('yo');
  };

  return (
    <Elements stripe={stripeLib}>
      <CheckoutFormStyles onSubmit={handleSubmit}>
        <CardElement />
        <ProductButton type={'submit'}>Check Out</ProductButton>
      </CheckoutFormStyles>
    </Elements>
  );
};

export default Checkout;
