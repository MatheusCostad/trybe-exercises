import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButton1 = this.handleButton1.bind(this);
    this.handleButton2 = this.handleButton2.bind(this);
    this.handleButton3 = this.handleButton3.bind(this);

    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    };
  }

  handleButton1() {
    this.setState((prevState) => ({
      clicksBtn1: prevState.clicksBtn1 + 1,
    }));
  }
  
  handleButton2() {
    this.setState((prevState) => ({
      clicksBtn2: prevState.clicksBtn2 + 1,
    }));
  }
  
  handleButton3() {
    this.setState((prevState) => ({
      clicksBtn3: prevState.clicksBtn3 + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleButton1 }>{this.state.clicksBtn1}</button>
        <button onClick={ this.handleButton2 }>{this.state.clicksBtn2}</button>
        <button onClick={ this.handleButton3 }>{this.state.clicksBtn3}</button>
      </div>
    );
  }
}

export default App;