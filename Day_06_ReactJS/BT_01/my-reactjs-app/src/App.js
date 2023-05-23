import './App.css';
// import styled from 'styled-components';
// import Button from './components/Button/Button';
// import {RedButton} from './components/Button';
// import {Hello} from './components/Hello';
import {Card} from 'components/Card';
// import {Counter2} from './components/Counter';

// function Button() {
//   return <button>This is Button</button>;
// }
function App() {
  return (
    <div className="App">
      <div className="App-header">
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
    </div>
  );
}

export default App;

// const StyledCounter = styled(Counter2)`
//   text-align: center;
//   background-color: red;
// `;
