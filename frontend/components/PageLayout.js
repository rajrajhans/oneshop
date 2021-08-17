import React from 'react';
import Header from './header/Header';

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
