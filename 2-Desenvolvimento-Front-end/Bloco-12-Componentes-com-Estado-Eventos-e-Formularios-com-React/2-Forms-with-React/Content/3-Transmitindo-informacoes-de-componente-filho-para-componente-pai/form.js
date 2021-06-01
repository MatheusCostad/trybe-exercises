import React, { Component } from 'react';
import './form.css';
import Textarea from './textarea.js'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: '',
      select: '',
      check: false,
      formularioComErros: true,
      uploadForm: false,
    };
  }

  handleChange({ target }, boo = false) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      formularioComErros: boo,
    });
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form className="form">
          <fieldset>
            <Textarea
              value= {this.state.text} 
              handleChange= {this.handleChange} 
            />
          <label>
            Select
            <select name="select" onClick={this.handleChange}>
              <option value="valor1" >Valor 1</option>
              <option value="valor2" >Valor 2</option>
            </select>
          </label>
          </fieldset>
          <fieldset>
          <label>
          Check
          <input
            type="checkbox"
            name="check"
            onClick={this.handleChange}
          />
          </label>
          <label>
          File
          <input type="file" />
          </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;