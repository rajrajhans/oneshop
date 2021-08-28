import React from 'react';
import Header from './header/Header';
import styled, { createGlobalStyle } from 'styled-components';
import Loading from './Loading';
import { SkeletonTheme } from 'react-loading-skeleton';
import Cart from './Cart';
import { useState } from 'react';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    
    --light: #ffeabe;
    --black: #393939;
    --secondary: #fdc30e;
    --tertiary: #534688;
    --accent: #ff8028;
    --dark: #d64208;
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
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (state) => {
    setIsCartOpen(state);
  };

  return (
    <>
      <GlobalStyles />
      <Loading />
      <Cart isCartOpen={isCartOpen} />
      <InnerStyles>
        <Header toggleCart={toggleCart} />
        <SkeletonTheme color={'#f9f9f9'} highlightColor={'#ededed'}>
          {children}
        </SkeletonTheme>
      </InnerStyles>
    </>
  );
};

export default PageLayout;
