import React from 'react';
import styled from 'styled-components';
import {Button} from 'components/Button';
import ethImg from 'assets/images/eth-img.svg';
import ethSmall from 'assets/images/eth-small-icon.svg';

import plusIcon from 'assets/images/plusIcon.svg';
import arrowRightIcon from 'assets/images/arrow-right-icon.svg';

const Card = ({
  title,
  amount,
  content,
  percent,
  sidebar,
  bgColor,
  textCenter,
  colorTitle,
  width,
  height,
  ...rest
}) => {
  return (
    <StyledCard
      bgColor={bgColor}
      textCenter={textCenter}
      colorTitle={colorTitle}
      sidebar={sidebar}
      width={width}
      height={height}
      className="card"
      {...rest}
    >
      <div className="title">{title}</div>
      {amount ? (
        <div className="amount-wrapper">
          <img className="eth-img" src={ethImg} alt="eth" />
          <span className="amount">{amount.toFixed(2)}</span>
          <span className="amount-text">ETH</span>
        </div>
      ) : (
        <div className="content-wrapper">
          <span
            className={sidebar ? 'content-card-sidebar content' : 'content '}
          >
            {content}
          </span>
          {sidebar ? '' : <span className="content-text">%</span>}
        </div>
      )}

      {sidebar ? (
        <div className="card-sidebar">
          <img className="eth-img-small" src={ethSmall} alt="eth" />
          <span className="eth-text">ETH</span>
        </div>
      ) : (
        ''
      )}

      {sidebar ? (
        <Button width={196} height={49} borderRadius={12} bgColor="#FFFFFF">
          <span className="btn-content-wrap">
            <div className="btn-content-img">
              <img
                className="btn-content-iconPlus"
                src={plusIcon}
                alt="plusIcon"
              />
            </div>
            <span>Top Up Balance</span>
            <div className="btn-content-img">
              <img src={arrowRightIcon} alt="arrowRightIcon" />
            </div>
          </span>
        </Button>
      ) : (
        <Button
          percent={percent}
          borderRadius={12}
          width={100}
          height={44}
          borderColor="#E9E9E9"
          textColor="#747475"
        >
          {Math.abs(percent)}%
        </Button>
      )}
    </StyledCard>
  );
};

export {Card};

const StyledCard = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 22px;
  background: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
  border-radius: 12px;
  font-size: 12px;
  line-height: 16px;
  /* Text/color2 */

  /* color: #747475; */

  .title {
    color: ${(props) => (props.sidebar ? '#e5e5e5' : '#747475')};
    text-align: ${(props) => (props.textCenter ? 'center' : 'left')};
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }

  .amount,
  .content {
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    margin-right: 4px;

    /* Text/color1 */
    color: #27262e;
  }
  .amount-text,
  .content-text {
    font-weight: 500;
  }
  .amount-wrapper,
  .content-wrapper {
    margin-bottom: 12px;
  }

  .eth-img {
    margin-right: 4px;
  }

  .content-card-sidebar {
    display: block;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
  }
  .card-sidebar {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .eth-img-small {
    margin-right: 6px;
  }

  .eth-text {
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }

  .btn-content-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-content-img {
    width: 20px;
    height: 20px;
  }

  .btn-content-img .btn-content-iconPlus {
    width: 100%;
  }

  .btn-content-wrap span {
    font-size: 14px;
    font-weight: 700;
    color: #27262e;
  }
`;
