import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.svg';

export const Logo = () => {
  return (
    <LogoWrap>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="logo-detail">
          <div className="logo-text">MyNFT</div>
          <div className="logo-desc">NFT Marketplace</div>
        </div>
      </div>
    </LogoWrap>
  );
};

const LogoWrap = styled.div`
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    margin-right: 20px;
  }
  .logo-text {
    font-size: 28px;
    font-weight: 700;
  }
  .logo-desc {
    margin-top: 4px;
    font-size: 10px;
    font-weight: 700;
    color: #7a797d;
  }
`;
