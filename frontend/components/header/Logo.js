import React from 'react';
import styled from 'styled-components';

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
    props.top && props.left ? '#989898' : 'var(--black)'};
  position: absolute;
  top: ${(props) => (props.top ? '10px' : null)};
  bottom: ${(props) => (props.bottom ? '10px' : null)};
  left: ${(props) => (props.left ? '10px' : null)};
  right: ${(props) => (props.right ? '10px' : null)};
  border-radius: 50%;
`;

const LogoText = styled.div`
  font-weight: 700;
  font-size: 1.9rem;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoShapeOuter>
        <LogoShapeInner top={true} left={true} />
        <LogoShapeInner top={true} right={true} />
        <LogoShapeInner bottom={true} left={true} />
        <LogoShapeInner bottom={true} right={true} />
      </LogoShapeOuter>
      <LogoText>oneshop</LogoText>
    </LogoContainer>
  );
};

export default Logo;
