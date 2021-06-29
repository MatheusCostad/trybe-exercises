import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email ainda não tenha sido passado.', () => {
  const EMAIL_USER = '';
  const { queryByAltText } = render(<ValidEmail email={EMAIL_USER} />);
  expect(queryByAltText('Email Inválido')).not.toBeInTheDocument()
  expect(queryByAltText('Email Validos')).not.toBeInTheDocument()
});

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});