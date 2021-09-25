import styled from 'styled-components';

const OrderStyles = styled.div`
  .order-header {
    text-align: center;
    padding: 2rem 0;
    font-weight: 700;
    font-size: 24px;
    color: var(--dark);
    border-bottom: 10px solid var(--secondary);
  }

  .order-container {
    padding: 2rem;
    & > p {
      display: grid;
      grid-template-columns: 1fr 5fr;
      margin: 0;
      border-bottom: 1px solid var(--accent);
      span {
        padding: 1rem;
        &:first-child {
          font-weight: 900;
          text-align: right;
        }
      }
    }
  }

  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid var(--accent);
  box-shadow: var(--bs);
  border-top: 10px solid var(--secondary);

  .order-item {
    border-bottom: 1px solid var(--accent);
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export default OrderStyles;
