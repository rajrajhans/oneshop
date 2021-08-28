import React from 'react';
import { useLoadingContext } from './LoadingContext';
import LogoShape from './header/LogoShape';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 50;
  animation: LogoZoomInZoomOut 1.2s infinite;

  --outer-size: 5.4rem;
  --inner-size: 12px;
  --margin-size: 20px;
  --shape-color: var(--accent);
  --odd-shape-color: var(--dark);

  @keyframes LogoZoomInZoomOut {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

const Loading = () => {
  const { isLoading } = useLoadingContext();

  if (!isLoading) return null;

  return (
    <LoadingContainer>
      <LogoShape />
    </LoadingContainer>
  );
};

export default Loading;
