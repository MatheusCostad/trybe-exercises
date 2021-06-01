import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: '',
      select: '',
      check: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form className="form">
          <label>
            Textarea
            <textarea name="text" value={this.state.text} onChange={this.handleChange} />
          </label>
          <label>
            Select
            <select name="select" onClick={this.handleChange}>
              <option value="valor1" >Valor 1</option>
              <option value="valor2" >Valor 2</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;