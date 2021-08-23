import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import LogoShape from './LogoShape';

const LogoContainer = styled.div`
  --outer-size: 2.7rem;
  --inner-size: 6px;
  --margin-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.div`
  font-weight: 900;
  font-size: 1.9rem;
`;

const LogoLinkContainer = styled.div`
  a {
    color: var(--black);
    --shape-color: var(--black);
    --odd-shape-color: #989898;
    transition: color 0.5s;
  }

  a:hover {
    text-decoration: none !important;
    color: var(--accent);
    --shape-color: var(--accent);
    --odd-shape-color: var(--dark);
  }
`;

const Logo = () => {
  return (
    <LogoLinkContainer>
      <Link href={'/'}>
        <a>
          <LogoContainer>
            <LogoShape />
            <LogoText>oneshop</LogoText>
          </LogoContainer>
        </a>
      </Link>
    </LogoLinkContainer>
  );
};

export default Logo;
