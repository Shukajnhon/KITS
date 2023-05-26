import React from 'react';
import {Button} from 'components/Button';
import creatorImg from 'assets/images/creatorImg1.svg';
import styled from 'styled-components';
import {Color} from 'components/Color';

export const Creator = ({title, srcImg, name, userName}) => {
  return (
    <CreatorStyled>
      <div className="title-top">
        <div className="title"> {title ? title : 'Top Creator'}</div>
        <div className="title-link">See All</div>
      </div>
      <div className="creators-wrap">
        <CreatorItem srcImg={creatorImg} isFollow={true}></CreatorItem>
        <CreatorItem srcImg={creatorImg}></CreatorItem>
        <CreatorItem srcImg={creatorImg} isFollow={true}></CreatorItem>
        <CreatorItem srcImg={creatorImg}></CreatorItem>
        <CreatorItem srcImg={creatorImg}></CreatorItem>
        <CreatorItem srcImg={creatorImg}></CreatorItem>
        <CreatorItem srcImg={creatorImg}></CreatorItem>
      </div>
    </CreatorStyled>
  );
};

const CreatorItem = ({srcImg, name, userName, isFollow}) => {
  return (
    <div className="creators">
      <div className="number">1.</div>
      {/* info */}
      <div className="creators-info">
        <div className="creators-img">
          <img src={srcImg} alt="creatorImg" />
        </div>
        <div className="creators-detail">
          <div className="name">Michael Jordan</div>
          <div className="user-name">@jordan_</div>
        </div>
      </div>
      {/* btn */}
      <CreatorBtnStyle className="creator-btn" isFollow={isFollow}>
        <Button
          borderRadius={20}
          bgColor={isFollow ? Color.primaryColor : Color.secondaryColor}
          width={80}
          height={34}
        >
          <div className="creator-btn-text">
            {isFollow ? 'Following' : 'Follow'}
          </div>
        </Button>
      </CreatorBtnStyle>
    </div>
  );
};

const CreatorBtnStyle = styled.div`
  .creator-btn-text {
    color: ${(props) =>
      props.isFollow ? `${Color.whiteColor}` : `${Color.primaryColor}`};
  }
`;

const CreatorStyled = styled.div`
  /* width: max-content; */
  padding: 40px 20px 30px 20px;
  display: flex;
  border-radius: 16px;
  background-color: ${Color.whiteColor};
  flex-direction: column;
  .title-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    color: ${Color.textColor};
  }
  .title-link {
    font-size: 16px;
    font-weight: 500;
    color: ${Color.textColor2};
    cursor: pointer;
  }
  /* creators */

  .creators {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .number {
    font-size: 16px;
    font-weight: 700;
    /* margin-right: 8px; */
    color: ${Color.textColor};
  }

  .creators-info {
    display: flex;
  }
  .creators-img {
    width: 44px;
    height: 44px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .creators-img img {
    width: 100%;
    width: 100%;
  }
  .creators-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    color: ${Color.textColor};
  }
  .user-name {
    font-size: 12px;
    font-weight: 400;
    color: ${Color.textColor2};
  }

  .creator-btn-text {
    font-size: 12px;
    font-weight: 600;
  }
`;
