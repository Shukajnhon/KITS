import React from 'react';
import styled from 'styled-components';
import {Button} from 'components/Button';
import ethImg from 'assets/images/eth-img.svg';

const Card = ({title, amount, content, percent}) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      {amount ? (
        <div className="amount-wrapper">
          <img className="eth-img" src={ethImg} alt="eth" />
          <span className="amount">{amount.toFixed(2)}</span>
          <span className="amount-text">ETH</span>
        </div>
      ) : (
        <div className="content-wrapper">
          <span className="content">{content}</span>
          <span className="content-text">%</span>
        </div>
      )}
      <Button
        percent={percent}
        borderRadius={12}
        width={115}
        borderColor="#E9E9E9"
        textColor="#747475"
      >
        {Math.abs(percent)}%
      </Button>
    </StyledCard>
  );
};

export {Card};

const StyledCard = styled.div`
  /* width: 164px;
  height: 167px; */
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  font-size: 12px;
  line-height: 16px;
  /* Text/color2 */

  color: #747475;
  .title {
    color: #747475;
    text-align: left;
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
`;
