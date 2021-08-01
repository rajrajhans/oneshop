import React from 'react';
import Header from './header/Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    
    --light: #ffeabe;
    --black: #393939;
    --secondary: #fdc30e;
    --accent: #ff8028;
    --dark: #d64208;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.3  rem;
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
  }
`;

const InnerStyles = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <InnerStyles>
        <Header />
        {children}
      </InnerStyles>
    </>
  );
};

export default PageLayout;
