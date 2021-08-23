import React from 'react';
import styled from 'styled-components';

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
  top: ${(props) => (props.top ? 'var(--margin-size)' : null)};
  bottom: ${(props) => (props.bottom ? 'var(--margin-size)' : null)};
  left: ${(props) => (props.left ? 'var(--margin-size)' : null)};
  right: ${(props) => (props.right ? 'var(--margin-size)' : null)};
  border-radius: 50%;
  transition: background 0.5s;
`;

const LogoShape = () => {
  return (
    <>
      <LogoShapeOuter>
        <LogoShapeInner top={true} left={true} />
        <LogoShapeInner top={true} right={true} />
        <LogoShapeInner bottom={true} left={true} />
        <LogoShapeInner bottom={true} right={true} />
      </LogoShapeOuter>
    </>
  );
};

export default LogoShape;
