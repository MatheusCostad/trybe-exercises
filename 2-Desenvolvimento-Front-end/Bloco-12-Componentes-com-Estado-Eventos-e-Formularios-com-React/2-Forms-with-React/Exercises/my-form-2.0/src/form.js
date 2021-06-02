import React, { Component } from 'react'
import PersonalInformation from './PersonalInformation.js';
import ProfessionalInformation from './ProfessionalInformation.js'
import FormButtons from './FormButtons.js'
import FormData from './FormData.js';
import './Form.css'

class Form extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      submitted: false,
    }
  }

  render() {
  const handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  const initialState = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    countryState: '',
    addressType: '',
    resume: '',
    role: '',
    roleDescription: '',
    submitted: false,
  }

  const resetForm = () => {
    this.setState(initialState);
  };

  const submitForm = () => {
    this.setState({ submitted: true });
    console.log(Object.values(this.state));
  };

    return (
      <form>
        <h1>Cadastro de Currículo</h1>
        <PersonalInformation handleChange= { handleChange }/>
        <ProfessionalInformation handleChange= { handleChange }/>
        <FormButtons resetForm = { resetForm } submitForm = { submitForm }/>
        {this.state.submitted ? <FormData currentState= { this.state } /> : <div></div>}
      </form>
    );
  }
}

export default Form;