import React from 'react';
import styled from 'styled-components';
import {Layout} from 'components/Layout';
import {Banner} from 'components/Banner';
import {CardNFT} from 'components/Card';
const Home = () => {
  return (
    <div>
      <Layout>
        <div className="content-wrap">
          <ContentLeftStyle className="content-left">
            <Banner text="Discover, Create and Sell Your Own NFT."></Banner>
            <CardNFT></CardNFT>
          </ContentLeftStyle>

          <ContentRightStyle className="content-right"></ContentRightStyle>
        </div>

        {/* <div className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Card title="Revenue" amount={5.0} percent={12.3}></Card>
          <Card title="Spending" amount={2.0} percent={8.1}></Card>
          <Card title="ROI" percent={-5.1} content="+14.02"></Card>
          <Card title="Estimated" amount={7.0} percent={3.2}></Card>
          <Button percent={-11}>11%</Button>
      <Button textColor="#000">11%</Button>

          <Counter name="Class Component"></Counter>
          <Counter2 name="Function Component"></Counter2>
          <StyledCounter name="Counter2"></StyledCounter>
          <Hello name="Hiếu" age={18}></Hello>
      <Hello name="Peter" age={8}></Hello>
      <Button></Button>
      <RedButton></RedButton>
        </div> */}
      </Layout>
    </div>
  );
};

export default Home;

const ContentLeftStyle = styled.div`
  width: 70%;
`;

const ContentRightStyle = styled.div`
  width: 30%;
`;
