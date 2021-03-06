import React from 'react';
import Header from '../header/Header';
import styled, { createGlobalStyle } from 'styled-components';
import Loading from './Loading';
import { SkeletonTheme } from 'react-loading-skeleton';
import Cart from '../cart/Cart';
import { CartStateProvider } from '../cart/CartState';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;

    --light: #ffeabe;
    --black: #393939;
    --secondary: #fdc30e;
    --tertiary: #534688;
    --accent: #ff8028;
    --dark: #d64208;
    --lightGrey: #cdcdcd;
  }

  /* styles for css reset */

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    background: var(--light);
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    line-height: inherit;
    cursor: pointer;
    background-color: transparent;
    background-image: none;
    text-transform: none;
    box-shadow: none;
    border: none
  }
`;

const InnerStyles = styled.div`
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <CartStateProvider>
        <GlobalStyles />
        <Loading />
        <Cart />
        <InnerStyles>
          <Header />
          <SkeletonTheme color={'#f9f9f9'} highlightColor={'#ededed'}>
            {children}
          </SkeletonTheme>
        </InnerStyles>
      </CartStateProvider>
    </>
  );
};

export default PageLayout;
