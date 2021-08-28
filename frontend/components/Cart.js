import React from 'react';
import styled from 'styled-components';
import { useUser } from '../utils/useUser';

const StyledCart = styled.div`
  padding: 20px;
  background-color: white;
  position: fixed;
  height: 100%;
  width: 40%;
  min-width: 500px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;

  top: 0;
  bottom: 0;
  right: 0;

  transform: translateX(100%);
  transition: all 0.3s;

  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && 'transform: translateX(0);'}

  header {
    border-bottom: 5px solid var(--black);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  footer {
    border-top: 10px double var(--black);
    margin-top: 2rem;
    padding-top: 2rem;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

const Cart = ({ isCartOpen }) => {
  const currentUser = useUser();

  if (!currentUser) return null;

  return (
    <StyledCart open={isCartOpen}>
      <header>
        <h4>{currentUser.name}'s Cart</h4>
      </header>

      <ul>
        {currentUser.cart.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </ul>
    </StyledCart>
  );
};

const CartItem = () => <div>x</div>;

export default Cart;
