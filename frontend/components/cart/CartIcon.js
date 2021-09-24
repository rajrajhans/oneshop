import React from 'react';
import ShoppingCartIcon from '../../public/assets/shopping-cart-icon.svg';
import IconWithTooltip from '../helpers/IconWithTooltip';
import { CartStateContext } from './CartState';
import styled from 'styled-components';

const CartIconContainer = styled.div`
  position: relative;
`;

const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -12px;
  font-size: 13px;
  background-color: var(--dark);
  color: white;
  padding: 6px;
  border-radius: 100%;
  font-weight: 700;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
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
        className={'IconWithTooltip'}
      >
        <div className="tooltip">Your Cart</div>

        <ShoppingCartIcon style={{ width: '25px' }} />
      </IconWithTooltip>
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
