import React, { createContext, useState, useContext } from 'react';

export const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, toggleIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);
