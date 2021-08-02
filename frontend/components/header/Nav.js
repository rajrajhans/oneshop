import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const navItems = [
  {
    name: 'Home',
    route: '/',
    id: 1,
  },
  {
    name: 'Shop',
    route: '/shop',
    id: 2,
  },
  {
    name: 'Sell',
    route: '/sell',
    id: 3,
  },
  {
    name: 'Account',
    route: '/account',
    id: 4,
  },
];

const NavItem = styled(Link)`
  color: red;
  display: none !important;
  padding: 100px;
`;

const Nav = () => {
  return (
    <div>
      {navItems.map((navItem) => (
        <NavItem key={navItem.id} href={navItem.route}>
          {navItem.name}
        </NavItem>
      ))}
    </div>
  );
};

export default Nav;
