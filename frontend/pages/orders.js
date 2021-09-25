import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useLoadingContext } from '../components/helpers/LoadingContext';
import ErrorMessage from '../components/helpers/ErrorMessage';
import Head from 'next/head';
import formatPrice from '../utils/formatPrice';
import OrderItemStyles from '../components/order/OrderItemStyles';
import styled from 'styled-components';
import Link from 'next/link';

const OrdersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

const OrdersPage = () => {
  const { data, loading, error } = useQuery(ALL_ORDERS_QUERY);

  const { toggleIsLoading } = useLoadingContext();

  useEffect(() => {
    loading ? toggleIsLoading(true) : toggleIsLoading(false);
  }, [loading]);

  const allOrders = data?.allOrders;

  const itemOrderCount = (order) =>
    order.items.reduce((acc, item) => acc + item.quantity, 0);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <Head>
        <title>oneshop | Your Orders</title>
      </Head>

      {allOrders && <h2>You have {allOrders.length} orders</h2>}

      {allOrders && (
        <OrdersList>
          {allOrders.map((order) => (
            <OrderItemStyles key={order.id}>
              <Link href={`/order/${order.id}`}>
                <div>
                  <div className="order-meta">
                    <p>
                      {itemOrderCount(order)} Item
                      {itemOrderCount(order) === 1 ? '' : 's'}
                    </p>{' '}
                    <p>
                      {order.items.length} Product
                      {itemOrderCount(order) === 1 ? '' : 's'}
                    </p>
                    <p>{formatPrice(order.total)}</p>
                  </div>
                  <div className={'images'}>
                    {order.items.map((item) => (
                      <img
                        key={`image-${item.id}`}
                        src={item.photo?.image?.publicUrlTransformed}
                        alt={item.title}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </OrderItemStyles>
          ))}
        </OrdersList>
      )}
    </>
  );
};

export default OrdersPage;

const ALL_ORDERS_QUERY = gql`
  query ALL_ORDERS_QUERY {
    allOrders {
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
