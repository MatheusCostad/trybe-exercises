# Testes com NodeJS

Existem diversas ferramentas para a criação de testes no back-end. Dentre elas uma dupla que se destaca é  `mocha` e `chai`.

Durante a instalação dessas é importante utilizar a flag `-D`, pois esses módulos só serão utilizados em fase de desenvolvimento.

```shell
npm install -D mocha chai
```

## Tipos de teste

- **Testes unitários**: Escopo limitado a um pequeno trecho do código. Como uma pequena função que soma dois números:

  ```javascript
  // ./funcoes/calculo/soma.js
  // Aqui podemos escrever testes pensando somente o comportamento esperado para função `soma`
  
  const soma = (valorA, valorB) => valorA + valorB;
  
  module.exports = soma;
  ```

- **Testes de integração**: Trabalha com a junção de múltiplos escopos. Como uma função de calculadora:

  ```javascript
  // ./funcoes/calculadora.js
  // Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`
  
  const { soma, subtracao, multiplicacao, divisao } = require("./calculo");
  
  const calculadora = (valorA, valorB, operacao) => {
    switch(operacao) {
      case "soma":
        soma(valorA, valorB);
        break;
      case "subtracao":
        subtracao(valorA, valorB);
        break;
      case "multiplicacao":
        multiplicacao(valorA, valorB);
        break;
      case "divisao":
        divisao(valorA, valorB);
        break;
      default:
        break;
    }
  };
  
  module.exports = calculadora;
  
  // Esse contexto fica mais evidente, quando temos operações mais complexas nos nossos testes, como operações que envolvem leitura de arquivos e consultas no banco de dados para composição de informações
  ```

- **Testes de Ponta-a-ponta**: Testam um fluxo de interação completa. Aqui, poderíamos pensar uma API que utiliza nossa calculadora (assim como diversas outras funções mais complexas) na hora de realizar uma operação de venda de produtos. Esse teste é o mais completo pois pressupõe que todos os demais testes estão ou serão desenvolvidos (Pensando na prática do TDD que veremos mais adiante).

## Estruturando testes com o Mocha

A estruturação de testes com Mocha é feita com base em duas das suas palavras reservadas:

- `describe`: Permite adicionar uma descrição para um grupo de testes. Recebe uma string descrevendo esse determinado grupo de testes e uma função com os testes em si.
- `it`: Permite descrever um teste específico. Recebe uma string e uma função com o teste em si.

```javascript
describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    //
  });
});
```

PS: É necessário importar o `mocha` em nosso arquivo.

## Aferindo testes com o Chai

É através do chai que conseguimos fazer as verificações com mais facilidade.

```javascript
// sem o chai
const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

// com o chai
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado'); 
  });
});
```

Também é possível usar o .to.be:

```javascript
expect(resposta).to.be.equals('reprovado');
```

Podemos encontrar um pouco mais sobre esse getters na documentação oficial do *chai* , em [language chains ](https://www.chaijs.com/api/bdd/#method_language-chains).

## Executando o teste

Inicialmente adicionamos o seguinte script no `package.json`:

```json
{
// ...
  "scripts": {
    "start": "node index.js",
    "test": "mocha tests"
  },
// ...
}
```

Desta forma basta executar o seguinte comando no terminal para que os testes sejam executados:

```shell
npm test
```

## Isolando nossos testes

Para manter a ingridade dos teste eles devem ser isolados, ou seja, não devem acessar nem o disco, nem a rede. Com isso além de termos um arquivo com os dados nescesssários para os testes precisamos garantir também a imutabilidade dele quando testamos funções de IO ( *input* / *output* ). Para isso existe o conceito de `Test Doubles` , que são objetos que fingem ser o outro objeto para fins de testes. Para nos ajudar com esse tipo de coisa, usaremos uma ferramenta chamada `sinon`.

Primeiro, vamos fazer a instalação do Sinon:

```shell
npm install --save-dev sinon
```

Agora vamos ver na prática como podemos criar um `stub` para a função de leitura do `fs` :

```javascript
const fs = require('fs');
const sinon = require('sinon');

sinon.stub(fs, 'readFileSync')
  .returns('Valor a ser retornado');
```

Perceba que precisamos importar o módulo `fs` e, então, falamos para o `sinon` criar um `stub` para a função `readFileSync` que retornará `'Valor a ser retornado'` , conforme especificamos na chamada para `returns` .

