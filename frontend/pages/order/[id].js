import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useLoadingContext } from '../../components/helpers/LoadingContext';
import ErrorMessage from '../../components/helpers/ErrorMessage';
import { useRouter } from 'next/router';
import OrderStyles from './OrderStyles';
import Head from 'next/head';
import formatPrice from '../../utils/formatPrice';

const SingleOrderPage = () => {
  const { query } = useRouter();

  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id || '1' },
  });

  const { toggleIsLoading } = useLoadingContext();

  useEffect(() => {
    loading ? toggleIsLoading(true) : toggleIsLoading(false);
  }, [loading]);

  const order = data?.order;

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <Head>
        <title>oneshop | Your Order</title>
      </Head>
      {order && (
        <OrderStyles>
          <div className="order-header">Order Successfully Placed!</div>
          <div className="order-container">
            <p>
              <span>Order Id:</span>
              <span>{order.id}</span>
            </p>
            <p>
              <span>Order Total:</span>
              <span>{formatPrice(order.total)}</span>
            </p>
            <p>
              <span>No. of Items:</span>
              <span>{order.items.length}</span>
            </p>

            <div className="items">
              {order.items.map((item) => (
                <div className="order-item" key={item.id}>
                  <img
                    src={item.photo.image.publicUrlTransformed}
                    alt={item.title}
                  />
                  <div className="item-details">
                    <h2>{item.name}</h2>

                    <p>Quantity: {item.quantity}</p>
                    <p>Item Price: {formatPrice(item.price)}</p>
                    <p>Subtotal: {formatPrice(item.price * item.quantity)}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </OrderStyles>
      )}
    </>
  );
};

export default SingleOrderPage;

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
