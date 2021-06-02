import React, { Component } from 'react';

class FormDataDisplay extends Component {
  render() {
    const {
      currentState: {
        name, email, cpf, address, city, countryState,
        addressType, resume, role, roleDescription
      }
    } = this.props;
    const submitTrue =(
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { address }</div>
        <div> Cidade: { city }</div>
        <div> Estado: { countryState }</div>
        <div> Tipo de residência: { addressType }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resume }</div>
        <div> Cargo: { role }</div>
        <div> Descrição do cargo: { roleDescription }</div>
      </div>)
    const submitFalse = (
      <div>
        <h3>Termine de preencher!</h3>
      </div>
    )
    return (
      <div>
        {Object.values(this.props.currentState).includes('') ? submitFalse : submitTrue}
      </div>
    );
  }
}

export default FormDataDisplay;