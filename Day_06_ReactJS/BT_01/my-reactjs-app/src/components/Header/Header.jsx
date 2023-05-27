import React from 'react';
import styled from 'styled-components';
import searchIcon from 'assets/images/search-icon.svg';
import avatar from 'assets/images/avatar.png';

import {BsBell} from 'react-icons/bs';
import {Color} from 'components/Color';
import {Link} from 'react-router-dom';

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
            {/* user info */}
            <div className="user-info">
              <div className="user-info-wrap">
                <div className="user-account">Information</div>
                <div className="user-logOut">
                  <Link to="/login">Log Out</Link>
                </div>
              </div>
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

  .user {
    position: relative;
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
  .user:hover .user-info {
    visibility: visible;
    opacity: 1;
  }
  .user-info {
    visibility: hidden;
    width: 150px;
    height: 100px;
    position: absolute;
    /* top: 0; */
    right: -40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: all 0.3s linear;
  }
  .user-info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .user-account {
    font-size: 18px;
    font-weight: 600;
    color: ${Color.textColor2};
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 10px 0;
  }
  .user-logOut {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    text-align: center;
    padding: 10px 0;
  }
  .user-logOut a {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: ${Color.textColor2};
  }

  .user-account:hover {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .user-account:hover,
  .user-logOut:hover {
    color: ${Color.whiteColor};
    background-color: ${Color.inputColor};
  }
  .user-logOut a:hover {
    color: ${Color.whiteColor};
  }
`;
