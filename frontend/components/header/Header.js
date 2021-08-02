import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Cart from './Cart';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />

      <Nav />
      <Cart />
    </HeaderContainer>
  );
};

export default Header;
