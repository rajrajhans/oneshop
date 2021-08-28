import React from 'react';
import styled from 'styled-components';
import { DropDown, DropDownItem, SearchStyles } from './StyledSearch';

const StyledSearchInput = styled.input`
  background: rgba(255, 234, 190, 0.7);
  font-size: 18px;
  border-radius: 50px;
  padding: 10px 18px;
  text-align: center;
`;

const Search = () => {
  return (
    <SearchStyles>
      <div>
        <StyledSearchInput type={'search'} placeholder={'Search'} />
      </div>
      <DropDown>
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
