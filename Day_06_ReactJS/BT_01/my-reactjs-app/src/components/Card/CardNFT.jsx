import React from 'react';
import styled from 'styled-components';
import cardNFTImg from 'assets/images/card-img-1.svg';
import clockIcon from 'assets/images/clockIcon.svg';
import avatarSeller from 'assets/images/avatarSeller.svg';
import ethSmall from 'assets/images/eth-small-icon.svg';
import {Button} from 'components/Button';

export const CardNFT = ({btn}) => {
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
          {/* btn */}
          {btn ? (
            <div className="btn-place-a-bid">
              <Button borderRadius={40} bgColor="#fff" width={144}>
                <div className="place-a-bid-text">Place a Bid</div>
              </Button>
            </div>
          ) : (
            ''
          )}
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
              <span>@johnti60</span>
            </div>
          </div>
          {/* Current Bid */}
          <div className="bid">
            <div className="current-bid">Current Bid</div>
            <div className="eth">
              <div className="eth-img">
                <img src={ethSmall} alt="ethSmall" />
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
    cursor: default;
  }
  .card-img {
    position: relative;
    border-radius: 12px;
    cursor: pointer;
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
    margin-top: 22px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
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

  .avatar-seller {
    display: flex;
  }
  .avatar-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .avatar-img img {
    width: 100%;
  }

  .seller-name span {
    font-size: 16px;
    font-weight: 400;
    color: #747475;
  }

  .bid {
    display: flex;
    justify-content: space-between;
  }
  .current-bid {
    font-size: 16px;
    font-weight: 700;
    color: #747475;
  }
  .eth {
    display: flex;
    align-items: center;
  }

  .eth-img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  .eth-img img {
    width: 100%;
  }

  .eth-amount {
    display: flex;
  }

  .amount {
    font-size: 16px;
    font-weight: 700;
    color: #27262e;
    margin-right: 4px;
  }

  .text {
    font-size: 16px;
    font-weight: 400;
    color: #747475;
  }

  .btn-place-a-bid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .place-a-bid-text {
    font-size: 16px;
    font-weight: 700;
    color: #5429ff;
  }
`;
