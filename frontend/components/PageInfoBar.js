import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 20px 0 20px;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const StyledMiddle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 2.1rem;
`;

const StyledLeft = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
`;

const PageInfoBar = ({ leftText, middleText, rightComponent }) => {
  return (
    <Container>
      <StyledLeft>{leftText}</StyledLeft>
      <StyledMiddle>{middleText}</StyledMiddle>
      <div>
        <rightComponent />
      </div>
    </Container>
  );
};

export default PageInfoBar;
