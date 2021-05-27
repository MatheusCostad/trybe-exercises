import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButton1 = this.handleButton1.bind(this);
    this.handleButton2 = this.handleButton2.bind(this);
    this.handleButton3 = this.handleButton3.bind(this);
  }

  handleButton1() {
    console.log('botão 1', this);
  }
  
  handleButton2() {
    console.log('botão 2', this);
  }
  
  handleButton3() {
    console.log('botão 3', this);
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleButton1 }>Botão 1</button>
        <button onClick={ this.handleButton2 }>Botão 2</button>
        <button onClick={ this.handleButton3 }>Botão 3</button>
      </div>
    );
  }
}

export default App;