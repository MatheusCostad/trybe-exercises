import React, { Component } from 'react';

const name = 'Matheus';
const description = 'Apenas um rapaz latino-americano';


class Description extends Component {
  render () {
  return <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  }
}

export default Description;