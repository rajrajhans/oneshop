import styled from 'styled-components';

export const StyledCartItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--black);
  display: grid;
  grid-template-columns: auto 1fr auto;

  img {
    margin-right: 1rem;
  }

  h4,
  p {
    margin: 0;
  }

  h4 {
    margin-bottom: 5px;
  }

  em {
    margin-left: 12px;
    font-size: 1rem;
    color: #4f4f4f;
  }
`;

export const DeleteFromCartBtn = styled.button`
  font-size: 2.2rem;
  background: none;
  border: 0;
  margin-left: 8px;
  margin-right: 5px;

  &:hover {
    color: var(--dark);
    cursor: pointer;
  }
`;
