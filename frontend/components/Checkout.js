import React from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements } from '@stripe/react-stripe-js';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const stripeLib = loadStripe('stripe_key');

const Checkout = () => {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutFormStyles>checkout</CheckoutFormStyles>
    </Elements>
  );
};

export default Checkout;
