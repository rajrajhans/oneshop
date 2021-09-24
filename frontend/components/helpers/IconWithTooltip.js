import React from 'react';
import styled from 'styled-components';

const ToolTipContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-left: 15px;
  border-radius: 50%;
  font-weight: 700;
  border: 2px solid var(--light);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .tooltip {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    width: 120px;
    background-color: var(--dark);
    color: white;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    font-weight: 400;
    font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    z-index: 5;

    position: absolute;
    top: ${(props) => (props.top ? props.top : null)};
    bottom: ${(props) => (props.bottom ? props.bottom : null)};
    left: ${(props) => (props.left ? props.left : null)};
    right: ${(props) => (props.right ? props.right : null)};

    :after {
      content: ' ';
      position: absolute;
      top: ${(props) => (props.arrowTop ? props.arrowTop : null)};
      bottom: ${(props) => (props.arrowBottom ? props.arrowBottom : null)};
      left: ${(props) => (props.arrowLeft ? props.arrowLeft : null)};
      right: ${(props) => (props.arrowRight ? props.arrowRight : null)};
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;

      border-color: ${(props) =>
        props.arrowDirection === 'bottom'
          ? 'var(--dark) transparent transparent transparent'
          : null};
      border-color: ${(props) =>
        props.arrowDirection === 'top'
          ? 'transparent transparent var(--dark) transparent;'
          : null};
    }
  }

  :hover {
    background-color: var(--secondary);
    border-color: white;

    .tooltip {
      visibility: visible;
      opacity: 1;
    }
  }

  svg {
    width: 23px;
    height: 23px;
  }
`;

const IconWithTooltip = ({ children, ...rest }) => {
  return <ToolTipContainer {...rest}>{children}</ToolTipContainer>;
};

export default IconWithTooltip;
