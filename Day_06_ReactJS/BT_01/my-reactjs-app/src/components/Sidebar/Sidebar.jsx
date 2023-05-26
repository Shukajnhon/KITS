import React from 'react';
import {ReactComponent as DashBoardIcon} from 'assets/images/dashboard-icon.svg';
import {ReactComponent as MarketIcon} from 'assets/images/market-icon.svg';
import {ReactComponent as ActiveBidsIcon} from 'assets/images/activeBids-icon.svg';
import {ReactComponent as MyPortfolioIcon} from 'assets/images/portfolio-icon.svg';
import {ReactComponent as WalletIcon} from 'assets/images/wallet-icon.svg';
import {ReactComponent as FavoriteIcon} from 'assets/images/favorite-icon.svg';
import {ReactComponent as HistoryIcon} from 'assets/images/history-icon.svg';
import {ReactComponent as SettingIcon} from 'assets/images/setting-icon.svg';
import {ReactComponent as SunIconIcon} from 'assets/images/sun-icon.svg';
import {ReactComponent as MoonIconIcon} from 'assets/images/moon-icon.svg';
import {ReactComponent as OtherIconIcon} from 'assets/images/other-icon.svg';

import styled from 'styled-components';

import {Logo} from 'components/Logo';

import {Link, NavLink} from 'react-router-dom';

import {Card} from 'components/Card';
// import {MarketIcon} from 'components/Icon';

export const Sidebar = () => {
  // console.log(market);
  return (
    <SidebarStyled>
      <Logo></Logo>
      <div className="dashboard-top">
        <NavItem path="dashboard" text="Dashboard">
          <DashBoardIcon></DashBoardIcon>
        </NavItem>

        {/* Market */}
        <NavItem path="market" text="Market">
          <MarketIcon></MarketIcon>
        </NavItem>
        {/* Active Bids */}
        <NavItem path="active-bids" text="Active Bids">
          <ActiveBidsIcon></ActiveBidsIcon>
        </NavItem>
      </div>
      {/* Profile */}
      <div className="dashboard-profile">
        <h4 className="title">Other</h4>
        {/* My Portfolio */}
        <NavItem path="my-portfolio" text="My Portfolio">
          <MyPortfolioIcon></MyPortfolioIcon>
        </NavItem>

        {/* Wallet */}
        <NavItem path="wallet" text="Wallet">
          <WalletIcon></WalletIcon>
        </NavItem>

        {/* Favorite */}
        <NavItem path="favorites" text="Favorites">
          <FavoriteIcon></FavoriteIcon>
        </NavItem>

        {/* History */}
        <NavItem path="history" text="History">
          <HistoryIcon></HistoryIcon>
        </NavItem>

        {/* Settings */}
        <NavItem path="settings" text="Settings">
          <SettingIcon></SettingIcon>
        </NavItem>
      </div>

      {/* Other */}
      <div className="dashboard-other">
        <DarkmodeBox></DarkmodeBox>
      </div>

      <div className="card-box-sidebar">
        {/* Card box */}
        <Card
          title="Your Balance"
          colorTitle="#E0DEE5"
          content="1,034.02"
          sidebar={true}
          bgColor="linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%)"
          textCenter={true}
        ></Card>
      </div>
    </SidebarStyled>
  );
};

// DarkmodeBox
const DarkmodeBox = () => {
  return (
    <DarkModeStyled className="dark-night-mode">
      <div className="dark-night-mode-icon">
        {/* <img src={otherIcon} alt="otherIcon" /> */}
        <OtherIconIcon></OtherIconIcon>
      </div>
      <div className="dark-night-mode-text">Light Mode</div>
      <div className="dark-night-mode-btn">
        <input type="checkbox" name="" id="darkmode-toggle" />
        <label className="darkmode-toggle-label" htmlFor="darkmode-toggle">
          {/* <img className="darkMode-sun" src={sunIcon} alt="sun" />
          <img className="darkMode-moon" src={moonIcon} alt="moon" /> */}
          <SunIconIcon></SunIconIcon>
          <MoonIconIcon></MoonIconIcon>
        </label>
      </div>
    </DarkModeStyled>
  );
};

// NavItem
const NavItem = ({text, path, colortext, children}) => {
  //   console.log(colortext);
  return (
    <NavItemStyle colortext={colortext}>
      <div className="nav-item">
        <div className="nav-icon">{children}</div>
        <div className="nav-link">
          <NavLink
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
            to={path}
          >
            {text}
          </NavLink>
        </div>
      </div>
    </NavItemStyle>
  );
};

const DarkModeStyled = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .darkmode-toggle-label {
    width: 56px;
    height: 30px;
    display: block;
    position: relative;
    border-radius: 200px;
    /* box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
      inset 0px -5px 15px rgba(255, 255, 255, 0.4); */
    cursor: pointer;
    background-color: #f0f0f0;
  }
  .darkmode-toggle-label::after {
    content: '';
    width: 22px;
    height: 22px;
    position: absolute;
    top: 4px;
    left: 4px;
    background: linear-gradient(rgb(255, 204, 137), rgb(216, 134, 11));
    border-radius: 180px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  }
  .dark-night-mode-btn input {
    position: absolute;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  #darkmode-toggle:checked + .darkmode-toggle-label {
    background-color: #242242;
  }
  #darkmode-toggle:checked + .darkmode-toggle-label::after {
    left: 52px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
  .darkmode-toggle-label,
  .darkmode-toggle-label::after {
    transition: 0.3s;
  }
  .darkmode-toggle-label img {
    position: absolute;
    width: 18px;
    top: 6px;
    z-index: 100;
  }
  .darkmode-toggle-label .darkMode-moon {
    right: 5px;
    /* fill: #7e7e7e; */
    transition: 0.3s;
    border-radius: 50%;
  }
  .darkmode-toggle-label .darkMode-sun {
    left: 6px;
    /* fill: #fff; */
    transition: 0.3s;
  }
`;

const NavItemStyle = styled.div`
  margin: 30px 0;
  .nav-item {
    display: flex;
    align-items: center;
  }
  .nav-icon {
    width: 24px;
    height: 24px;
    margin-right: 18px;
  }
  .nav-icon img {
    width: 100%;
  }

  .nav-link {
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
  }
  .nav-link a {
    text-decoration: none;
    color: ${(props) => (props.colortext ? props.colortext : '#7A797D')};
  }
  .nav-link a:visited {
    color: none;
  }
  .active {
    svg {
      path {
        stroke: #f30ee4;
      }
    }
    color: #f30ee4;
  }
`;

const SidebarStyled = styled.div`
  .dashboard-other {
    margin-bottom: 100px;
  }
`;

// NavItem.defaultProps = {
//   color: '#7A797D',
// };
