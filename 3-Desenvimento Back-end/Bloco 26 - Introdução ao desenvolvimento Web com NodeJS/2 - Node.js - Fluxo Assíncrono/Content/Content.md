# Node.js - Fluxo Assíncrono

O JavaScript é uma linguagem single-treaded(executa apensas uma operação por vez). Isso é um problema quando realizamos operações mais longas, pois durante a operação o usuário fica sem resposta. Por tanto é para que tenhamos um código performático precisamos realizar operações mais demoradas de forma assíncrona.

## Callbacks

Callback é uma função que é passada como parâmetro para outra função, e que será executada em segundo plano.

Em toda API de módulos nativa do Node as funções possuem o modelo **node-style** onde ela recebe dois parâmetros. Um que retorna um erro e o outro que retorna um resultado. Um bom exemplo é a função  `readFile` do módulo `fs`:

```javascript
const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
```

### O lado ruim dos callbacks

O resultado de uma callback só é presente dentro dela mesma. Isso é um problema caso precisemos executar uma coisa depois da outra fazendo com que tenhamos de chamar uma função dentro da outra, criando um callback hell. Um exemplo utilizando a biblioteca anterior é no caso de precisarmos ler mais de um arquivo em sequência:

```javascript
const fs = require('fs');

fs.readFile('file1.txt', (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', (err, file2Content) => {
    if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

    console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

    fs.readFile('file3.txt', (err, file3Content) => {
      if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

      console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
    });
  });
});
```

## Promises

Uma Promise é um tipo de callback desenvolvida para melhorar a legibilidade do código evitando callback hell. Isso acontece pois enquanto em uma callback comum termos apenas uma função que recebe tanto o erro quanto o sucesso, nas Promises temos uma forma de registrar uma callback para sucesso(resolvida através da função resolve) e outra forma de registrar uma callback para erros(resolvida através da função reject).

```javascript
function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}
```

Através do `.then` conseguimos registrar *vários callbacks de sucesso* para serem executados um após o outro.

```javascript
readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });
```

## Lendo arquivos com métodos síncronos
### Método `fs.readFileSync`

Método responsável por ler arquivos de forma síncrona.

O método `readFileSync` recebe dois parâmetros:

- O nome do arquivo;
- Um parâmetro opcional que, quando é uma string, define o *encoding* que será utilizado durante a leitura do arquivo.

No caso de haver algum erro durante a execução da função devesse utilizar o `try...catch` para tratar o erro.
[Link do exemplo](./io-local/readFileSync.js)

## Lendo arquivos com métodos assíncronos

### Método `fs.readFile`

Método responsável por ler arquivos de forma assíncrona.

Ele recebe três parâmetros:

- O nome do arquivo;
- Um parâmetro opcional que, quando é uma string, define o *encoding* que será utilizado durante a leitura do arquivo;
- Uma callback que permite receber e manipular os dados lidos do arquivo.

[Link do exemplo](./io-local/readFile.js)

## Escrevendo dados em arquivos

### Método `fs.readFile`

Método responsável por escrever dados em arquivos.

[Link do exemplo](./io-local/writeFile.js)

## Utilizando async/await

Melhora a legibilidade do código permitindo com que trabalhemos com Promises como se estivéssemos trabalhando com código síncrono.

```javascript
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()
```

## Rodando promessas simultaneamente com `Promise.all`

O `Promise.all` é um método da Promise que nos permite passar um array de Promises e receber de volta uma única Promise. Ela será resolvida com os resultados de todas as Promises, assim que todas elas forem resolvidas. Esse método também nos permite utilizar um único `catch` , que será chamado caso qualquer uma das Promises seja rejeitada.

```javascript
const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
```

## Atributos adicionais na utilização de métodos de leitura e escrita no `fs`

Nós métodos de escrita e leitura do módulo `fs` é possível passar um terceiro parâmetro com uma flag. O padrão é `'w'` , que especifica que o arquivo deve ser aberto para escrita. Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag `'wx'` , por exemplo, funciona como `'w'` , mas lança um erro caso o arquivo já exista:

```javascript
const fs = require('fs').promises;

// A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error('err');
  });
```

