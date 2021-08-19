import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useAnimatedNavToggler from '../../utils/useAnimatedNavToggler';
import MenuIcon from '../../public/menu-icon.svg';
import CloseIcon from '../../public/close-icon.svg';
import Cart from './Cart';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

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

  @media only screen and (max-width: 768px) {
    padding: 7px;
    justify-content: center;
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

const NavCloseContainer = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 0;
  }
`;

const MobileNavLinks = motion(styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 20px 10px 20px 50px;
  padding: 15px;
  border: 1px solid #e2e8f0;
  border-radius: 13px;
  background: white;

  a {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`);

const HighlightedText = styled.span`
  color: var(--accent);
`;

const NavItem = ({ navItem, router }) => (
  <NavItemContainer>
    <Link href={navItem.route}>
      <a>
        {router.pathname === navItem.route ? (
          <HighlightedText>{navItem.name}</HighlightedText>
        ) : (
          <span>{navItem.name}</span>
        )}
      </a>
    </Link>
  </NavItemContainer>
);

const NavItemsMobile = ({ navItems, closeNavbar, router }) => {
  const handleClick = (path) => {
    closeNavbar();
    router.push(path).catch((e) => {
      console.log(e);
    });
  };

  return (
    <>
      {navItems.map((navItem) => (
        <NavItemContainer key={navItem.id}>
          <a
            onClick={() => {
              handleClick(navItem.route);
            }}
          >
            {navItem.name}
          </a>
        </NavItemContainer>
      ))}
    </>
  );
};

const Nav = () => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const router = useRouter();

  return (
    <>
      <NavContainer>
        {navItems.map((navItem) => (
          <NavItem key={navItem.id} navItem={navItem} router={router} />
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
        <NavCloseContainer>
          <NavToggler
            onClick={toggleNavbar}
            className={showNavLinks ? 'open' : 'closed'}
          >
            <CloseIcon style={{ width: '20px', height: '20px' }} />
          </NavToggler>
        </NavCloseContainer>

        <NavItemsMobile
          navItems={navItems}
          closeNavbar={toggleNavbar}
          router={router}
        />
      </MobileNavLinks>
    </>
  );
};

export default Nav;
