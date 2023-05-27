import React from 'react';
import styled from 'styled-components';
import {Layout} from 'components/Layout';
import {Banner} from 'components/Banner';
import {Card, CardNFT} from 'components/Card';
import {Color} from 'components/Color';
import {Creator} from 'components/Creator';
const Home = () => {
  return (
    <div>
      <Layout>
        <ContentWrapStyle className="content-wrap">
          <ContentLeftStyle className="content-left">
            <Banner text="Discover, Create and Sell Your Own NFT."></Banner>
            <div className="trending">
              <div className="title-top">
                <div className="title">
                  <h2>Trending Auctions</h2>
                </div>
                <div className="title-link-list">
                  <div className="title-link-item active">Art</div>
                  <div className="title-link-item">Music</div>
                  <div className="title-link-item">Collectibles</div>
                  <div className="title-link-item">Utility</div>
                </div>
              </div>
              <div className="card">
                <CardNFT btn={true}></CardNFT>
                <CardNFT></CardNFT>
                <CardNFT></CardNFT>
                <CardNFT></CardNFT>
                <CardNFT></CardNFT>
                <CardNFT></CardNFT>
              </div>
            </div>
          </ContentLeftStyle>

          <ContentRightStyle className="content-right">
            <div className="widget">
              <Card
                title="Revenue"
                amount={5.0}
                percent={12.3}
                width="104px"
                height="118px"
              ></Card>
              <Card
                title="Spending"
                amount={2.0}
                percent={8.1}
                width="104px"
                height="118px"
              ></Card>
              <Card
                title="ROI"
                percent={-5.1}
                content="+14.02"
                width="104px"
                height="118px"
              ></Card>
              <Card
                title="Estimated"
                amount={7.0}
                percent={3.2}
                width="104px"
                height="118px"
              ></Card>
            </div>

            <div className="top-creator">
              <Creator></Creator>
            </div>
          </ContentRightStyle>
        </ContentWrapStyle>
      </Layout>
    </div>
  );
};

export default Home;

const ContentWrapStyle = styled.div`
  display: flex;
`;

const ContentLeftStyle = styled.div`
  width: 70%;

  .trending {
    margin-top: 24px;
  }

  .title-top {
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .title-link-list {
    display: flex;
    align-items: center;
  }
  .title-link-item {
    margin: 0 8px;
    padding: 0 12px;
    line-height: 28px;
    font-size: 14px;
    font-weight: 500;
    color: ${Color.textColor2};
    cursor: pointer;
  }

  .active {
    border-radius: 30px;
    color: ${Color.primaryColor};
    background-color: #5429ff1a;
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const ContentRightStyle = styled.div`
  width: 30%;

  .widget {
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
  }

  .top-creator {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }
`;
