import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import ErrorMessage from './ErrorMessage';
import { ProductsPerPage } from '../config';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid #a7a7a7;
  border-radius: 12px;

  & > * {
    margin: 0;
    padding: 12px 30px;
    border-right: 1px solid #a7a7a7;

    &:last-child {
      border-right: 0;
    }

    a[aria-disabled='true'] {
      color: grey;
      pointer-events: none;
    }
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationLink = styled.div`
  background-color: var(--light);
  font-weight: 600;
  transition: all 0.2s ease;

  border-top-right-radius: ${(props) => (props.right ? '10px' : null)};
  border-bottom-right-radius: ${(props) => (props.right ? '10px' : null)};

  border-top-left-radius: ${(props) => (props.left ? '10px' : null)};
  border-bottom-left-radius: ${(props) => (props.left ? '10px' : null)};

  :hover {
    background-color: var(--accent);
  }

  text-decoration: none;
  cursor: pointer;
`;

const Pagination = ({ page }) => {
  const { data, error, loading } = useQuery(COUNT_NUM_OF_PRODUCTS);

  if (error) return <ErrorMessage error={error} />;

  if (loading) return null;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / ProductsPerPage);

  return (
    <PaginationContainer>
      <PaginationStyles>
        <Head>
          <title>
            oneshop: Page {page} of {pageCount}
          </title>
        </Head>

        <Link href={'/'}>
          <PaginationLink left={true}>← Prev</PaginationLink>
        </Link>

        <p>Page 1 of {pageCount}</p>
        <p>{count} products total</p>

        <Link href={'/'}>
          <PaginationLink right={true}>Next →</PaginationLink>
        </Link>
      </PaginationStyles>
    </PaginationContainer>
  );
};

const COUNT_NUM_OF_PRODUCTS = gql`
  query COUNT_NUM_OF_PRODUCTS {
    _allProductsMeta {
      count
    }
  }
`;

export default Pagination;
