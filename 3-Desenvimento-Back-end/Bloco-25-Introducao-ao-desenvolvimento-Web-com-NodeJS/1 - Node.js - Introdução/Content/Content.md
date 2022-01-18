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

Arquivo com as configurações importantes do pacote. Nele encontramos um objeto, onde cada chave representa alguma configuração ou função. Exemplo de package.json:

```json
{
    "name": "test-project",
    "version": "1.0.0",
    "description": "A Node.js project",
    "main": "src/index.js",
    "private": true,
    "scripts": {
        "dev": "nodemon ./src/index",
        "start": "node ./src/index",
        "test": "jest",
        "compile": "tsc"
    },
    "dependencies": {
        "axios": "^0.21.1",
        "cors": "^2.8.5",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "joi": "^17.3.0",
        "pg": "^8.5.1",
        "sequelize": "^6.4.0",
        "uuid": "^8.3.2",
        "winston": "^3.3.3"
    },
    "devDependencies": {
        "jest": "^26.6.3",
        "nock": "^13.0.5",
        "nodemon": "^2.0.6",
        "sequelize-mock-v5": "^1.2.0"
    },
    "engines": {
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
    }
}
```

- `name`

  Define o nome do pacote ou aplicação.

  ```json
  {
  	"name": "example-name"
  }
  ```

  O nome deve ser menor que 214 caracteres, não pode ter espaços e somente pode conter letras minúsculas, hífens (-) ou underscore.

- `version`

   Define a versão.

  ```json
  {
  	"version": "1.0.0"
  }
  ```

- `autor`

  Define o nome do autor do pacote.

  ```json
   { "author": "dcmatheus" }
  ```

  Também pode ter esse formato:

  ```json
  {
      "author": {
          "name": "dcmatheus",
          "email": "contato@dcmatheus.com.br",
          "url": "https://www.dcmatheus.com"
      }
  }
  ```

- `contributors`

  Assim como o autor, o projeto pode ter um ou mais contribuidores. Esta propriedade é uma array que os lista:

  ```json
  {
      "contributors": [
          "dcmatheus1",
          {
              "name": "dcmatheus2",
          	"email": "contato@dcmatheus2.com.br",
          	"url": "https://www.dcmatheus2.com"
          }
      ]
  }
  ```

- `description`

  Breve descrição.

  ```json
  {
  	"description": "A Node.js project"
  }
  ```

- `main`

  Define o ponto de entrada da aplicação (o que vai ser retornado se alguém der um require no nosso pacote);

  ```json
  {
  	"main": "index.js"
  }
  ```

- `private`

  Com o parâmetro `true` garante a que a aplicação não será publicada no NPM;

  ```json
  {
  	"private": "true"
  }
  ```

- `scripts`

  Define scripts que podem ser executados;

  ```json
  {
  	"scripts": {
          "dev": "nodemon ./index",
          "start": "node ./index",
          "test": "jest"
      }
  }
  ```

- `dependencies`

  Define uma lista de pacotes npm instalados como dependências de produção;

  ```json
  {  
  	"dependencies": {
  		"readline-sync": "^1.4.10"
  	}
  }
  ```

- `devDependencies` 

  Define uma lista de pacotes npm instalados como dependências de desenvolvimento;

  ```json
  {
  	"devDependencies": {
         "jest": "^26.6.3" 
      }
  }
  ```

- `engines`

  Define quais versões de Node este pacote/aplicação funciona;

  ```json
  {
  	"engines": {
          "node": ">= 6.0.0",
          "npm": ">= 3.0.0"
      }
  }
  ```

Mais chaves no [site do Luiz Duarte](https://www.luiztools.com.br/post/o-guia-completo-do-package-json-do-node-js/).

### Comandos

Cheat Sheets de comandos para consulta rápida [aqui](./CheatSheets/NPM.md).

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

**Referências:**

1. [Trybe Bloco 25.1](https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/nodejs-introducao/c9afd697-cab8-4029-b0da-b7478557c55f/o-que-vamos-aprender/6615042e-b1d5-4a8d-8411-f00cc0fb9785?use_case=side_bar)
2. [luiztools.com.br](https://www.luiztools.com.br/post/o-guia-completo-do-package-json-do-node-js/)

