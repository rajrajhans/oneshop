import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 45px 20px 0 40px;

  @media only screen and (max-width: 768px) {
    margin-top: 35px;
  }
`;

const StyledMiddle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 2.1rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const StyledLeft = styled.div`
  font-weight: 700;
  font-size: 0.9rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const PageInfoBar = ({ leftText, middleText, RightComponent }) => {
  return (
    <Container>
      <StyledLeft>{leftText}</StyledLeft>
      <StyledMiddle>{middleText}</StyledMiddle>
      <div>{RightComponent}</div>
    </Container>
  );
};

export default PageInfoBar;
