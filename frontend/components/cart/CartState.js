import { useState, createContext, useContext } from 'react';

export const CartState = createContext(null);

export const CartStateProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartState.Provider value={{ isCartOpen, openCart, closeCart }}>
      {children}
    </CartState.Provider>
  );
};

export const CartStateContext = () => useContext(CartState);
