import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LogoContainer = styled.div`
  --outer-size: 2.7rem;
  --inner-size: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoShapeOuter = styled.div`
  height: var(--outer-size);
  width: var(--outer-size);
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
  background: #fff0d2;
  border: 3px solid white;
`;

const LogoShapeInner = styled.div`
  height: var(--inner-size);
  width: var(--inner-size);
  background: ${(props) =>
    props.top && props.left ? 'var(--odd-shape-color)' : 'var(--shape-color)'};
  position: absolute;
  top: ${(props) => (props.top ? '10px' : null)};
  bottom: ${(props) => (props.bottom ? '10px' : null)};
  left: ${(props) => (props.left ? '10px' : null)};
  right: ${(props) => (props.right ? '10px' : null)};
  border-radius: 50%;
  transition: background 0.5s;
`;

const LogoText = styled.div`
  font-weight: 700;
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
            <LogoShapeOuter>
              <LogoShapeInner top={true} left={true} />
              <LogoShapeInner top={true} right={true} />
              <LogoShapeInner bottom={true} left={true} />
              <LogoShapeInner bottom={true} right={true} />
            </LogoShapeOuter>
            <LogoText>oneshop</LogoText>
          </LogoContainer>
        </a>
      </Link>
    </LogoLinkContainer>
  );
};

export default Logo;
