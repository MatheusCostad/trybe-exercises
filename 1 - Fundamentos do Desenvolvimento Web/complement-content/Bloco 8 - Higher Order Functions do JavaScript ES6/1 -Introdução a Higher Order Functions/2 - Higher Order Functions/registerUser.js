const button = document.querySelector('#signup-button');

// minha função de primeira classe;
const registerUser = () => {
  // código para registrar a nova pessoa usuária;
  console.log('Registrado com sucesso!');
};

// minha função de segunda classe;
button.addEventListener('click', registerUser);