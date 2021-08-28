import { useState, createContext, useContext } from 'react';
import useCartCount from './useCartCount';

export const CartState = createContext(null);

export const CartStateProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCartCount();
  const [cartCount, setCartCount] = useState(getCartCount());

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const decrementCartCount = () => {
    setCartCount(cartCount - 1);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartState.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        cartCount,
        incrementCartCount,
        decrementCartCount,
      }}
    >
      {children}
    </CartState.Provider>
  );
};

export const CartStateContext = () => useContext(CartState);
