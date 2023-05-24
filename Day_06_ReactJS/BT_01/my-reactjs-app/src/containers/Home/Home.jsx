import React from 'react';
import {Card} from 'components/Card';
import {Link} from 'react-router-dom';
import {Header} from 'components/Header';

import {Layout} from 'components/Layout';
const Home = () => {
  return (
    <div>
      <Layout>
        <div className="App-header">
          <Header></Header>

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
          {/* <Button percent={-11}>11%</Button>
      <Button textColor="#000">11%</Button> */}

          {/* <Counter name="Class Component"></Counter> */}
          {/* <Counter2 name="Function Component"></Counter2> */}
          {/* <StyledCounter name="Counter2"></StyledCounter> */}
          {/* <Hello name="Hiếu" age={18}></Hello>
      <Hello name="Peter" age={8}></Hello>
      <Button></Button>
      <RedButton></RedButton> */}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
