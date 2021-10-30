import styled from 'styled-components';

const OrderItemStyles = styled.li`
  box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  list-style: none;
  padding: 2rem;
  border: 1px solid var(--accent);

  :hover {
    cursor: pointer;
    box-shadow: -2px -1px 17px 1px rgba(255, 128, 40, 0.56);
  }

  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: contain;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderItemStyles;
