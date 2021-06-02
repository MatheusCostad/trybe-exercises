import React, { Component } from 'react';

class ProfessionalFormForm extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resume"
            maxLength="1000"
            required
            onChange={handleChange}
          />
        </div>
        <div className="container">
          Cargo:
            <input
              type="text"
              name="role"
              maxLength="40"
              required
              onChange={handleChange}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
              }}
            />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="roleDescription"
            maxLength="500"
            onChange={handleChange}
          />
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalFormForm;