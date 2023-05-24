import React from 'react';
import styled from 'styled-components';
import searchIcon from 'assets/images/search-icon.svg';

export const Header = () => {
  return (
    <div>
      <SearchStyle className="search">
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          className="input-search"
          name=""
          id=""
          placeholder="Search Item, Collection and Account.."
        />
      </SearchStyle>
    </div>
  );
};

const SearchStyle = styled.div`
  width: 461px;
  height: 56px;
`;
