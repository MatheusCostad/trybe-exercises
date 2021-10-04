#  Introdução

##  Node.js

Runtime JavaScript baseado no interpretador de JavaScript utilizado pelo Google Chrome, o V8.

Diferente do V8 tradicional o Node não possue métodos para manipular páginas web, mas em compensação é capaz de manipular arquivos no sistema e na rede.

### Vantagens

- Tem uma comunidade extremamente ativa, possuindo o maior repositório de pacotes e bibliotecas. Este repositório é o NPM.
- As operações de entrada e saída de dados são assíncronas, permitindo escrever softwares servidores de requisições HTTP de forma muito mais eficiente se comparado a outras linguagens.
- Sua natureza não bloqueante permite aplicações em tempo real.
- A linguagem executada pelo Node é o JavaScript.

## Sistema de módulos

Um  módulo é uma funcionalidade ou um conjunto delas isoladas do restante do código que possue espoco próprio organizado em um ou mais arquivos. Existem três tipos de módulos:

### Módulos internos

São os módulos já inclusos no Node. Exemplos:

- [`fs` ](https://nodejs.org/api/fs.html): Fornece uma API para interagir com o sistema de arquivos de forma geral;
- [`url` ](https://nodejs.org/api/url.html): Provê utilitários para ler e manipular URLs;
- [`querystring` ](https://nodejs.org/api/querystring.html): Disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;
- [`util` ](https://nodejs.org/api/util.html): Oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

### Módulos locais

Aqueles definidos junto com a aplicação.  Representam parte do programa separada em arquivos diferentes.

### Módulos terceiros

São aqueles criados por outras pessoas que estão disponíveis para uso através do NPM.

## Importando e exportando módulos

Existem dois sistemas de módulos difundidos na comunidade JavaScript:

### ES6

Sistema de módulos nativo do JavaScript. Os módulos são importados usando a palavra `import` e exportadas com `export`.

Por padrão o Node não possue suporte a módulos ES6 sendo necessário o uso de transpiladores, como o [Babel, ](https://babeljs.io/)ou supersets da linguagem, como o [TypeScript ](https://www.typescriptlang.org/), para que esse recurso esteja disponível.

### CommonJS

Sistema de módulos nativo do Node.

Exportação: 

```javascript
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;
```

Importação:

```javascript
// index.js
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7
```

**PS**: Podemos dar o nome que quisermos para a função após a importação.

Mais de uma exportação em um mesmo arquivo:

```javascript
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};
```

Mais de uma importação em um mesmo arquivo:

```javascript
// index.js
const brlValue = require('./brValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7
```

Também é possível usar *object destructuring*:

```javascript
const { brl, usdToBrl } = require('./brValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7
```

Além de importarmos um arquivo como módulo, podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos. Para isso a pasta precisa de um index.js, que importa os arquivos do módulo e os exporta da forma mais conveniente.

Exemplo:

```javascript
// meuModulo/funcionalidade-1.js

module.exports = function () {
  console.log('funcionalidade1');
}
```

```javascript
// meuModulo/funcionalidade-2.js

module.exports = function () {
  console.log('funcionalidade2');
}
```

```javascript
// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };
```

## NPM

O NPM é  o repositório de pacotes do NodeJS. É através dele que conseguimos instalar pacotes de terceiros e publicar os nossos. 

### CLI

Ferramenta oficial que auxilia o gerenciamento dos pacotes. É através dele que criamos projetos, removemos e instalamos pacotes, publicamos e gerenciamos versões dos nossos próprios pacotes.

### `package.json`

Arquivo com as configurações importantes do pacote.

### Comandos

Cheat Shell de comandos para consulta rápida [aqui](./CheatSheets/NPM.md).

- `npm init`

  Cria um novo pacote na página onde é executado. Ao ser executado pede informações como o nome do pacote, versão, autor e afins. Finalizando essas perguntas ele cria um `package.json` com as informações passadas.

  PS: Para iniciar a aplicação com valores padrões basta passar a flag `-y`.

- `npm run`

  Executa um comando pré configurado na chave `scripts` do `package.json`.

- `npm start`

  Comando necessário para executar a aplicação principal daquele pacote. Sua função é executar o a chave `start` contida dentro da chave `scripts` no `package.json`.

- `npm install`

  Sem nenhum parâmetro instala todos os pacotes listados nas chaves `dependecendies` e `devDependencies` do `package.json`.

  Quando recebe o nome de um pacote instala o pacote em questão e o adiciona na chave `dependecendies`. Caso seja passado a flag `-D` o pacote é adicionado na chave  `devDependencies`.

  PS: O `install` pode ser abreviado para `i`.

