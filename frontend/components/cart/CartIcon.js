import React from 'react';
import ShoppingCartIcon from '../../public/assets/shopping-cart-icon.svg';
import IconWithTooltip from '../IconWithTooltip';
import { CartStateContext } from './CartState';

const CartIcon = () => {
  const { openCart } = CartStateContext();

  const handleClick = () => {
    openCart();
  };

  return (
    <div onClick={handleClick}>
      <IconWithTooltip
        top={'60px'}
        right={'5px'}
        arrowDirection={'top'}
        arrowBottom={'100%'}
        arrowLeft={'100px'}
      >
        <div className="tooltip">Your Cart</div>

        <ShoppingCartIcon style={{ width: '25px' }} />
      </IconWithTooltip>
    </div>
  );
};

export default CartIcon;
