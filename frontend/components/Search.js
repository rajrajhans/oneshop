import React from 'react';
import styled from 'styled-components';
import { DropDown, DropDownItem, SearchStyles } from './StyledSearch';
import { resetIdCounter, useCombobox } from 'downshift';

const StyledSearchInput = styled.input`
  background: rgba(255, 234, 190, 0.7);
  font-size: 18px;
  border-radius: 50px;
  padding: 10px 18px;
  text-align: center;
`;

const Search = () => {
  resetIdCounter();
  const { getMenuProps, getInputProps, getComboboxProps } = useCombobox({
    items: [],
    onInputValueChange() {
      console.log('changed');
    },
    onSelectedItemChange() {
      console.log('item');
    },
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <StyledSearchInput
          {...getInputProps({
            type: 'search',
            placeholder: 'Search Products',
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
