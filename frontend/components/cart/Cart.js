import React from 'react';
import { useUser } from '../../utils/useUser';
import CloseIcon from '../../public/close-icon.svg';
import { StyledCart } from './StyledCart';
import { CartItem } from './CartItem';

const Cart = ({ isCartOpen, toggleCart }) => {
  const currentUser = useUser();

  const closeCart = () => {
    toggleCart(false);
  };

  if (!currentUser) return null;

  console.log({ currentUser });

  return (
    <StyledCart open={isCartOpen}>
      <header>
        <h3>{currentUser.name}'s Cart</h3>
        <div onClick={closeCart}>
          <CloseIcon />
        </div>
      </header>

      <ul>
        {currentUser.cart.length &&
          currentUser.cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
      </ul>

      {currentUser.cart.length === 0 && (
        <div>Your cart is currently empty!</div>
      )}
    </StyledCart>
  );
};

export default Cart;
