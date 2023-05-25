import React from 'react';
import styled from 'styled-components';
import {Button} from 'components/Button';
import bannerImg from 'assets/images/banner-img.svg';

export const Banner = ({text}) => {
  return (
    <BannerStyle>
      <div className="banner-wrap">
        <div className="banner-title">{text}</div>
        <div className="banner-btn">
          <div className="discover-btn">
            <Button
              width={128}
              borderRadius={40}
              bgColor="#fff"
              textColor="#5429FF"
            >
              <div className="banner-btn-text">Discover</div>
            </Button>
          </div>
          <div className="create-btn">
            <Button
              width={128}
              borderRadius={40}
              bgColor="transparent"
              borderColor="#fff"
              textColor="#FFFFFF"
            >
              <div className="banner-btn-text">Create</div>
            </Button>
          </div>
        </div>
      </div>
    </BannerStyle>
  );
};

const BannerStyle = styled.div`
  margin-top: 32px;
  width: 716px;
  height: 354px;
  border-radius: 12px;
  background: linear-gradient(
      75.33deg,
      rgba(0, 0, 0, 0.2) -10.41%,
      rgba(0, 0, 0, 0) 62.93%
    ),
    url(${bannerImg});
  .banner-wrap {
    padding: 64px;
  }

  .banner-title {
    font-size: 54px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    width: 100%;
    margin-bottom: 32px;
  }
  .banner-btn {
    display: flex;
  }
  .discover-btn {
    margin-right: 20px;
  }
`;
