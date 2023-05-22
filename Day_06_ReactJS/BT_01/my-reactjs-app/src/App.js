import './App.css';
// import Button from './components/Button/Button';
// import {RedButton} from './components/Button';
// import {Hello} from './components/Hello';

import {Counter2} from './components/Counter';

// function Button() {
//   return <button>This is Button</button>;
// }
function App() {
  return (
    <div className="App">
      {/* <Counter name="Class Component"></Counter> */}
      <Counter2 name="Function Component"></Counter2>
      {/* <Hello name="Hiếu" age={18}></Hello>
      <Hello name="Peter" age={8}></Hello>
      <Button></Button>
      <RedButton></RedButton> */}
    </div>
  );
}

export default App;
