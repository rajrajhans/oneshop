import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useAnimatedNavToggler from '../../utils/useAnimatedNavToggler';
import MenuIcon from '../../public/menu-icon.svg';
import Cart from './Cart';
import { motion } from 'framer-motion';

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
  @media only screen and (max-width: 768px) {
    display: none;
  }
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

const NavToggler = styled.button`
  z-index: 20;
  transition: all 0.3s;

  :hover {
    color: var(--accent);
  }

  :focus {
    outline: none;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = motion(styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  inset: 0;
  margin: 4px 6px;
  padding: 10px;
  border: 1px solid var(--black);
  border-radius: 10%;
  background: white;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`);

const NavItem = ({ navItem }) => (
  <NavItemContainer>
    <Link href={navItem.route}>
      <a>{navItem.name}</a>
    </Link>
  </NavItemContainer>
);

const Nav = () => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  return (
    <>
      <NavContainer>
        {navItems.map((navItem) => (
          <NavItem key={navItem.id} navItem={navItem} />
        ))}
      </NavContainer>

      <Cart />

      <NavToggler
        onClick={toggleNavbar}
        className={showNavLinks ? 'open' : 'closed'}
      >
        {!showNavLinks && (
          <>
            <MenuIcon style={{ width: '20px', height: '20px' }} />
          </>
        )}
      </NavToggler>

      <MobileNavLinks
        initial={{ x: '150%', display: 'none' }}
        animate={animation}
      >
        Nav links and close box
      </MobileNavLinks>
    </>
  );
};

export default Nav;
