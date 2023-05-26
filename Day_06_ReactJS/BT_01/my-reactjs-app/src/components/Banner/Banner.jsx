import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import styled from 'styled-components';
import {Button} from 'components/Button';
import bannerImg from 'assets/images/banner-img.svg';
import bannerImg2 from 'assets/images/bannerImg2.jpg';
import bannerImg3 from 'assets/images/bannerImg3.jpg';

export const Banner = ({text}) => {
  return (
    <BannerStyle>
      <Carousel showArrows={false} showStatus={false} autoPlay={true}>
        <div className="banner-wrap slider-1">
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
        {/* 2 */}
        <div className="banner-wrap slider-2">
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
        {/* 3 */}
        <div className="banner-wrap slider-3">
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
      </Carousel>
    </BannerStyle>
  );
};

const BannerStyle = styled.div`
  margin-top: 32px;
  width: 716px;
  height: 354px;
  border-radius: 12px;
  /* background: linear-gradient(
      75.33deg,
      rgba(0, 0, 0, 0.2) -10.41%,
      rgba(0, 0, 0, 0) 62.93%
    ),
    url(${bannerImg}); */

  .slider-1 {
    background: url(${bannerImg});
  }
  .slider-2 {
    background: url(${bannerImg2});
  }
  .slider-3 {
    background: url(${bannerImg3});
  }
  .slider-1,
  .slider-2,
  .slider-3 {
    border-radius: 12px;
    background-position: center;
    background-size: 100%;
  }
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
