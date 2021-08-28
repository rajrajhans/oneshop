import React from 'react';
import { DropDown, DropDownItem, SearchStyles } from './StyledSearch';

const Search = () => {
  return (
    <SearchStyles>
      <div>
        <input type={'search'} />
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
