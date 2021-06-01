import React, { Component } from 'react';

class Textarea extends Component {
  render() {
  
  const { value, handleChange } = this.props;
  let error = undefined;
  let booValue = true;

  if (value.length > 100) {
    error = 'Texto grande demais.'
  } else if (value.length < 10) {
    error = 'Texto pequeno demais.';
  } else{
    error = undefined
  } 

  error ? (booValue = true) : (booValue = false);

  return (
    <label>
      Textarea
      <textarea
        name="text"
        value= {value}
        onChange= {(event) => handleChange(event, booValue)} />
      <div>{error ? error : ''}</div>
      {booValue}
    </label>
  )

  }
}

export default Textarea;