import React from 'react';
import InputMask from "react-input-mask";

class PersonalInformation extends React.Component {

  render() {

    const { handleChange } = this.props;

    const states = {
      AC:"Acre",
      AL:"Alagoas",
      AP:"Amapá",
      AM:"Amazonas",
      BA:"Bahia",
      CE:"Ceará",
      DF:"Distrito Federal",
      ES:"Espírito Santo",
      GO:"Goiás",
      MA:"Maranhão",
      MT:"Mato Grosso",
      MS:"Mato Grosso do Sul",
      MG:"Minas Gerais",
      PA:"Pará",
      PB:"Paraíba",
      PR:"Paraná",
      PE:"Pernambuco",
      PI:"Piauí",
      RJ:"Rio de Janeiro",
      RN:"Rio Grande do Norte",
      RS:"Rio Grande do Sul",
      RO:"Rondônia",
      RR:"Roraima",
      SC:"Santa Catarina",
      SP:"São Paulo",
      SE:"Sergipe",
      TO:"Tocantins"
    };
    return (
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label id= 'nameLbl'>
        Nome:
          <input
          name='name'
            id='inpName'
            type='text'
            maxLength='40'
            onChange= { handleChange }
            required
          />
        </label>

        <label id='emailLbl'>
          Email:
          <input
            name='email'
            id='inpEmail'
            type='email'
            maxLength='50'
            onChange= { handleChange }
            required
          />
        </label>

        <label>
          CPF:
          <InputMask
            name='cpf'
            id='inpCPF'
            mask= '999.999.999-99'
            maskChar=' '
            onChange= { handleChange }
            required
          />
        </label>

        <label>
          Endereço:
          <input
            name = 'address'
            id='inpEndereco'
            type='text'
            maxLength='200'
            onChange= { handleChange }
            required
          />
        </label>

        <label>
          Cidade:
          <input
            name = 'city'
            id='inpCidade'
            type='text'
            maxLength=''
            onBlur = {({ target }) => {
              target.value = target.value.match(/^\d/) ? '' : target.value;
            }}
            onChange= { handleChange }
            required
          />
        </label>

        <label>
          Estado:
          <select
            name='countryState'
            required
            defaultValue=''
            onChange= { handleChange }
          >
          {
            Object.keys(states).map((value, key) => (
              <option value= { value } key={ key }>{ states[value] }</option>
            ))
          }
          </select>
        </label>

        <div>
          Complemento:
          <label>
            <input
              type='radio'
              id='house'
              name='addressType'
              value='house'
              required
              onChange= { handleChange }
            />
            Casa
          </label>
          <label>
            <input
              type='radio'
              id='apart'
              name='addressType'
              value='apartment'
              required
              onChange= { handleChange }
            />
            Apartamento
          </label>
        </div>

      </fieldset>
    )
  }
}

export default PersonalInformation;