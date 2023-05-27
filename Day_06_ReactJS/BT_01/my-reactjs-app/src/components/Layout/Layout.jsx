import React from 'react';
import styled from 'styled-components';
import {Header} from 'components/Header';
import {Sidebar} from 'components/Sidebar';

export const Layout = ({children}) => {
  return (
    <LayoutStyle>
      <div className="left">
        <div className="sideBar">
          <Sidebar></Sidebar>
        </div>
      </div>
      <div className="right">
        <div className="right-container">
          <Header></Header>
          <div className="content">{children}</div>
        </div>
      </div>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  .sideBar {
    padding: 23px;
    background: #fff;
    box-shadow: 0px 0px 56px 7px rgba(0, 0, 0, 0.1);
  }
  /* min-height: 100vh; */
  background-color: #ddd;
  .left {
    float: left;
    width: 20%;
    background-color: #fff;
    min-height: 100vh;
  }
  .right {
    float: right;
    width: 80%;
    background-color: #caeae6;
    /* min-height: 100vh; */
  }
  .right-container {
    padding: 30px 40px;
  }
`;
