import React from 'react';

class FormButtons extends React.Component {

  render() {

  const { resetForm, submitForm } = this.props;

    return (
      <div className= 'formButtons'>
        <input
          id='submitBtn'
          type='button'
          value='Enviar'
          onClick={ submitForm }
        />
        <input
          id='resetBtn'
          type='reset'
          value='Limpar'
          onClick= { resetForm }
        />
      </div>
    )
  }
}

export default FormButtons;