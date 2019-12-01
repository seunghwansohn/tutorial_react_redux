import React from 'react';
import './App.css';
import CounterComponent from './components/counterComponent'

//함수를 변수 형태로 선언후
const deliverFunction = () => {
  console.log('이렇게 해야 콤포넌트로 함수가 전달됩니다.');
}


//콤포넌트에 props 행태로 전달
function App() {
  return (
    <div className="App">
      <CounterComponent onDeliverFunction = {deliverFunction}></CounterComponent>
    </div>
  );
}

export default App;
