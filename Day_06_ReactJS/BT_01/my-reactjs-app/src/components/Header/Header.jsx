import React from 'react';
import styled from 'styled-components';
import searchIcon from 'assets/images/search-icon.svg';
import avatar from 'assets/images/avatar.png';

import {BsBell} from 'react-icons/bs';

export const Header = () => {
  return (
    <div>
      <SearchStyle className="header-container">
        <div className="search header-left">
          <div className="search-icon-wrap">
            <img className="search-icon" src={searchIcon} alt="search" />
          </div>
          <input
            type="text"
            className="input-search"
            name=""
            id=""
            placeholder="Search Item, Collection and Account.."
          />
        </div>
        <div className="header-right">
          <div className="notify">
            <BsBell className="notify-icon"></BsBell>
          </div>
          <div className="user">
            <div className="user-img">
              <img src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </SearchStyle>
    </div>
  );
};

const SearchStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    width: 461px;
    height: 56px;
    display: flex;
    align-items: center;
    border-radius: 35px;
    background-color: #fff;
  }

  .search-icon-wrap {
    width: 20px;
    margin: 0 14px 0 26px;
    cursor: pointer;
  }
  .search-icon-wrap img {
    width: 100%;
  }
  .input-search {
    width: 80%;
    border: none;
    border-radius: 35px;
    outline: none;
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  .notify {
    width: 56px;
    height: 56px;
    display: flex;
    margin-right: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .notify-icon {
    width: 20px;
    height: 20px;
    color: #7a797d;
  }

  .user-img {
    width: 56px;
    height: 56px;
    border: radius 50%;
    cursor: pointer;
  }
  .user-img img {
    width: 100%;
    border: radius 50%;
  }
`;
