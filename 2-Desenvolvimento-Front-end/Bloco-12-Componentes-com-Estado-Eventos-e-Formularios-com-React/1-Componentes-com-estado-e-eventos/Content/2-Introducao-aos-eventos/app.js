import React from 'react';
import './App.css';

function handleClick1() {
  console.log(1);
}
function handleClick2() {
  console.log(2);
}
function handleClick3() {
  console.log(3);
}
class App extends React.Component {
  render() {
    return <div>
      <button onClick={handleClick1}>Botão1</button>
      <button onClick={handleClick2}>Botão2</button>
      <button onClick={handleClick3}>Botão3</button>
    </div>
  }
}

export default App;