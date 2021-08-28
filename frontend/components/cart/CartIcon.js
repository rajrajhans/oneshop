import React from 'react';
import ShoppingCartIcon from '../../public/assets/shopping-cart-icon.svg';
import IconWithTooltip from '../IconWithTooltip';
import { CartStateContext } from './CartState';
import styled from 'styled-components';

const CartIconContainer = styled.div`
  position: relative;
`;

const CartCount = styled.div`
  position: absolute;
  top: 0;
  right: -6px;
  font-size: 15px;
`;

const CartIcon = () => {
  const { openCart, cartCount } = CartStateContext();

  const handleClick = () => {
    openCart();
  };

  return (
    <CartIconContainer onClick={handleClick}>
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
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
