import React from 'react';
import styled from 'styled-components';
import { DropDown, DropDownItem, SearchStyles } from './StyledSearch';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';
import debounce from 'lodash.debounce';

const StyledSearchInput = styled.input`
  background: rgba(255, 234, 190, 0.7);
  font-size: 18px;
  border-radius: 50px;
  padding: 10px 18px;
  text-align: center;
`;

const Search = () => {
  const [findProducts, { data, loading }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'no-cache',
    },
  );

  const debouncedFindItems = debounce(findProducts, 360);

  const { inputValue, getMenuProps, getInputProps, getComboboxProps } =
    useCombobox({
      items: [],
      onInputValueChange() {
        debouncedFindItems({
          variables: {
            searchTerm: inputValue,
          },
        });
      },
      onSelectedItemChange() {
        console.log('item');
      },
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
            className: 'loading',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        <DropDownItem>etjg</DropDownItem>
        <DropDownItem>etjg</DropDownItem>
        <DropDownItem>etjg</DropDownItem>
        <DropDownItem>etjg</DropDownItem>
        <DropDownItem>etjg</DropDownItem>
      </DropDown>
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
