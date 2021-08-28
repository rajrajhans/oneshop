import React from 'react';
import ShoppingCartIcon from '../../public/assets/shopping-cart-icon.svg';
import IconWithTooltip from '../IconWithTooltip';

const CartIcon = ({ toggleCart }) => {
  const handleClick = () => {
    toggleCart(true);
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
