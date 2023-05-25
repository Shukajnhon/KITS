import React from 'react';
import styled from 'styled-components';
import cardNFTImg from 'assets/images/card-img-1.svg';
import clockIcon from 'assets/images/clockIcon.svg';
import avatarSeller from 'assets/images/avatarSeller.svg';

export const CardNFT = () => {
  return (
    <CardNFTStyle>
      <div className="card-wrap">
        <div className="card-img">
          <img src={cardNFTImg} alt="cardNFT" />
          {/* clock */}
          <div className="card-time">
            <div className="clock">
              <img src={clockIcon} alt="clock" />
            </div>
            <div className="time">12 : 03 : 45</div>
          </div>
        </div>

        {/* card body */}
        <div className="card-body">
          <div className="title">
            <div className="title-text">Ape In Love</div>
            <div className="likes">
              <span className="likes-count">21,5K Likes</span>
            </div>
          </div>
          {/* avatar */}
          <div className="avatar-seller">
            <div className="avatar-img">
              <img src={avatarSeller} alt="" />
            </div>
            <div className="seller-name">
              <span>Ape In Love</span>
            </div>
          </div>
          {/* Current Bid */}
          <div className="bid">
            <div className="current-bid">Current Bid</div>
            <div className="eth">
              <div className="eth-img">
                <img src="" alt="" />
              </div>
              <div className="eth-amount">
                <div className="amount">9.10</div>
                <div className="text">ETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardNFTStyle>
  );
};

const CardNFTStyle = styled.div`
  width: 348px;
  height: 364px;
  background-color: #fff;
  border-radius: 16px;

  .card-wrap {
    padding: 10px;
  }
  .card-img {
    position: relative;
    border-radius: 12px;
  }

  .card-time {
    position: absolute;
    bottom: 16px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #16161629;
    width: 100px;
    height: 28px;
  }

  /* .clock {
    width: 16px;
    height: 16px;
  } */
  .clock img {
    width: 80%;
  }
  .time {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }

  .card-body {
    padding: 4px;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .title-text {
    font-size: 24px;
    font-weight: 700;
    color: #27262e;
  }

  .likes-count {
    font-size: 16px;
    font-weight: 400;
    color: #747475;
  }

  .avatar-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .avatar-img {
    width: 100%;
  }
`;
