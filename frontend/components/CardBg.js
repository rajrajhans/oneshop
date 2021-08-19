import React from 'react';
import styled from 'styled-components';
import Blob1 from '../public/assets/blob-1.svg';
import Blob2 from '../public/assets/blob-2.svg';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -2;
`;

const InnerCardBg = styled.div`
  position: absolute;

  background: rgba(253, 195, 14, 0.6);
  box-shadow: 0 2px 2px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: 100%;
  height: 45vh;
  border-radius: 50px;
`;

const Blob1Container = styled.div`
  position: absolute;
  max-width: 250px;
  top: -20px;
  filter: blur(30px);

  svg {
    width: 230px;
    height: 230px;
  }
`;
const Blob2Container = styled.div`
  position: absolute;
  max-width: 300px;
  top: 30px;
  left: ${(props) => (props.left ? '0' : null)};
  right: ${(props) => (props.right ? '0' : null)};
  filter: blur(45px);

  svg {
    width: 300px;
    height: 300px;
  }
`;

const CardBg = () => (
  <CardContainer>
    <Blob1Container>
      <Blob1 />
    </Blob1Container>
    <Blob2Container left={true}>
      <Blob2 />
    </Blob2Container>
    <Blob2Container right={true}>
      <Blob2 />
    </Blob2Container>
    <InnerCardBg />
  </CardContainer>
);

export default CardBg;
