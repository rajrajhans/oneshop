import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <>
      <div>Hello from Page Layout</div>
      {children}
    </>
  );
};

export default PageLayout;
