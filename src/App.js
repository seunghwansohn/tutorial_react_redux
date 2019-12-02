import React from 'react';
import './App.css';
import CounterContainer from './containers/counterContainer';
import TodosContainer from './containers/todoContainer';


function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <TodosContainer></TodosContainer>
    </div>
  );
}
export default App;