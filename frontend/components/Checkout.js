import React, { useState } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { ProductButton } from './ProductCard';
import { useLoadingContext } from './LoadingContext';
import nProgress from 'nprogress';

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

const CheckoutContainer = () => (
  <Elements stripe={stripeLib}>
    <Checkout />
  </Elements>
);

const Checkout = () => {
  const { toggleIsLoading } = useLoadingContext();
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    // 1. start showing loading indicator & start page transition
    // 2. create payment method via stripe (token comes back if this is successful)
    // 3. handle any errors from stripe
    // 4. send the stripe token to keystone server, via a custom mutation
    // 5. change the page to "view order"
    // 6. close cart
    // 7. stop showing loading indicator
    e.preventDefault();
    toggleIsLoading(true);
    nProgress.start();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (error) {
      setError(error);
    }
    toggleIsLoading(false);
  };

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      <CardElement />
      <ProductButton type={'submit'}>Check Out</ProductButton>
    </CheckoutFormStyles>
  );
};

export default CheckoutContainer;
