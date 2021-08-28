import React from 'react';
import styled from 'styled-components';
import { DropDown, DropDownItem, SearchStyles } from './StyledSearch';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';

const StyledSearchInput = styled.input`
  background: rgba(255, 234, 190, 0.7);
  font-size: 18px;
  border-radius: 50px;
  padding: 10px 18px;
  text-align: center;
`;

const Search = () => {
  const router = useRouter();
  const [findProducts, { data, loading }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'no-cache',
    },
  );

  const products = data?.searchTerms || [];

  console.log('products', products);

  const debouncedFindItems = debounce(findProducts, 180);

  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items: products,
    onInputValueChange() {
      debouncedFindItems({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router
        .push({
          pathname: `/product/${selectedItem.id}`,
        })
        .catch((e) => {
          console.log(e);
        });
    },
    itemToString: (item) => item?.name || '',
  });

  resetIdCounter();

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <StyledSearchInput
          {...getInputProps({
            type: 'search',
            placeholder: '🔎 Search Products',
            id: 'search',
            className: loading ? 'loading' : null,
          })}
        />
      </div>
      {isOpen && (
        <DropDown {...getMenuProps()}>
          {products.map((product, index) => (
            <DropDownItem
              key={product.id}
              {...getItemProps({ item: product, index })}
              highlighted={index === highlightedIndex}
            >
              <img
                src={product.photo.image.publicUrlTransformed}
                alt={product.name}
                width={'50'}
              />
              {product.name}
            </DropDownItem>
          ))}
          {isOpen && !products.length && !loading && (
            <DropDownItem>Sorry, no products found.</DropDownItem>
          )}
        </DropDown>
      )}
    </SearchStyles>
  );
};

export default Search;

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
