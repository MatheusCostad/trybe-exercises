import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  if (email) return (
    <div>
      <h2 data-testid="id-email-user" >{`Valor: ${email}`}</h2>
      {(verifyEmail(email) ? <h3 style={{color: "green"}}>Email Valido</h3> : <h3 style={{color: "red"}}>Email Inválido</h3>)}
    </div>
  );
  return (
    <></>
  )
};

export default ValidEmail;