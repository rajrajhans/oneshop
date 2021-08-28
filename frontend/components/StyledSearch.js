import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 0;
  margin-top: 8px;
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'var(--light)')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'var(--light)')};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0 var(--dark);
  }
  to {
    box-shadow: 0 0 20px 2px var(--dark);
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;

    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
