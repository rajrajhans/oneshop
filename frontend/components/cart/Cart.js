import React from 'react';
import { useUser } from '../../utils/useUser';
import CloseIcon from '../../public/close-icon.svg';
import { StyledCart } from './StyledCart';
import { CartItem } from './CartItem';
import formatPrice from '../../utils/formatPrice';
import calculateTotalCartPrice from '../../utils/calculateTotalCartPrice';
import { CartStateContext } from './CartState';
import Checkout from '../Checkout';

const Cart = () => {
  const currentUser = useUser();
  const { isCartOpen, closeCart } = CartStateContext();

  if (!currentUser) return null;

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

      <footer>
        <p>{formatPrice(calculateTotalCartPrice(currentUser.cart))}</p>
        <Checkout />
      </footer>
    </StyledCart>
  );
};

export default Cart;
