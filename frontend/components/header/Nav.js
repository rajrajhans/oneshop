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

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NavItemContainer = styled.div`
  padding: 0 10px;
  display: flex;
  margin: auto;

  a {
    font-weight: 600;
    color: var(--black);
    transition: color 0.2s;
  }

  a:hover {
    color: var(--accent);
    text-decoration: none;
  }
`;

const NavItem = ({ navItem }) => (
  <NavItemContainer>
    <Link href={navItem.route}>
      <a>{navItem.name}</a>
    </Link>
  </NavItemContainer>
);

const Nav = () => {
  return (
    <NavContainer>
      {navItems.map((navItem) => (
        <NavItem key={navItem.id} navItem={navItem} />
      ))}
    </NavContainer>
  );
};

export default Nav;
