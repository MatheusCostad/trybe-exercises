# Express: HTTP com Node.js

O protocolo HTTP é a fundação da web moderna. Ele é a base da comunicação de boa parte do que acontece na web. O HTTP hoje é responsável pelo tráfego de todo tipo de informação na internet. Boa parte do que é enviado e recebido via HTTP são requisições e respostas a **APIs HTTP** . 

## HTTP

Para saber o que compõe o uma requisição HTTP analisaremos a requisição que é feita pelo navegador quando abrimos a página `https://developer.mozilla.org` .

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept: text/html
```

- Utilizamos o método `GET` para buscar algo no servidor.
- Passamos o caminho, que nesse caso é o `/`.
- A versão do protocolo (que nesse caso é a 1.1).
- O local (host) onde está o recurso que se está tentando acessar, ou seja, a URL ou o endereço IP servidor.
- Os **headers** . São informações adicionais a respeito de uma requisição ou de uma resposta. Na requisição de exemplo, temos o header `Host` , que informa o endereço do servidor, e o header `Accept` , que informa o tipo de resposta que esperamos do servidor.

O `GET` não é o único método HTTP, existem 39 métodos diferentes. Os mais comuns são: `GET` , `PUT` , `POST` , `DELETE`, `PATCH` e o `OPTIONS`.

Quando um servidor recebe uma requisição, ele envia de volta uma **resposta** . Veja um exemplo:

```http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)
```

A composição da resposta é definida por:

- A versão do protocolo (1.1 no nosso exemplo).
- O código do status, que diz se a requisição foi um sucesso ou não (nesse caso, deu certo, pois recebemos um código **200** ), acompanhado de uma pequena mensagem descritiva ( **OK** , nesse caso).
- Os **Headers** , no mesmo esquema da requisição. No caso do exemplo acima, o **Content-Type** diz para o navegador o que ele precisa fazer. No caso do HTML, ele deve renderizar o documento na página.
- Um **body** , que é opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo.

## APIs HTTP

É o tipo de API que baseia boa parte da web, elas permite que códigos de comuniquem com aplicações através de requisições HTTP.

## Express

Framework  criado para facilitar a criação de APIs que foi construído pensando num padrão de construção chamado REST. Existem outras ferramentas semelhantes no mercado, mas o Express é largamente adotado na comunidade hoje, e dois dos motivos são:

- Ele foi lançado no final de 2010, ou seja, é um framework maduro e “testado em batalha”;
- Ele é um "unopinionated framework" (framework sem opinião). Isso significa que ele não impõe um padrão de desenvolvimento na hora de escrever sua aplicação.

## Roteamento

O aspecto mais básico de uma API HTTP se dá através de suas **rotas** , também chamadas de *endpoints* . Uma rota ou endpoint é definida pelo **método HTTP e caminho** . 

O roteamento consiste em "direcionar" uma requisição para que seja atendida por uma determinada parte do nosso sistema.

No Express, nós registramos uma rota utilizando a assinatura `app.METODO(caminho, callback)` , onde a função de callback recebe três parâmetros: `request` , `response` e `next` .

- `request` : comumente chamado de `req` ; contém as informações enviadas pelo cliente ao servidor.
- `response` : geralmente chamado de `res` ; permite o envio de informações do servidor de volta ao cliente.
- `next` : função que diz para o Express que aquele callback terminou de ser executado, e que ele deve prosseguir para executar o próximo callback para aquela rota. Este parâmetro é opcional e você entenderá melhor o uso do next em breve.

**As rotas respondem a requisições que satisfaçam a condição método HTTP + caminho** .

```js
const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
        // Requisições para rota GET `/` são resolvidas aqui!
    res.send('hello world get');
  })
  .post(function (req, res) {
        // Requisições para rota POST `/` são resolvidas aqui!
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

## Parâmetros de rota

Quando queremos buscar um objeto específico o Express nos fornece alguns recursos. Um deles é o parâmetro de rota.

Imagine um site de notícia, onde cada notícia possue um id. Seria inviável escrever uma rota para cada notícia. Por tanto definimos o id como um ***parâmetro de rota*** e realizamos a busca a partir dele:

```js
app.get('/noticias/:id', function (req, res) {
  const { id } = req.params;
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) return res.status(404).json({ message: 'Notícia não encontrada!'});

  res.status(200).json(noticia);
});
```

## Query String

Outro recurso importante é o ***query string***. Ele facilita a buscas variáveis com strings. basta passar uma `?` na URL e um `&` para mais de um parâmetro. Esses parâmetros são pegos através do `.query`. Exemplo: 

```js
app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});

// Mais de um parâmetro:

app.get('/recipes/search', function (req, res) {
    const { name, maxPrice } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
    res.status(200).json(filteredRecipes);
})
```

## Recebendo dados no body da requisição.

Alguns tipos de dados são inviáveis de se receber via URL, senhas por exemplo. Nesses casos passamos os dados pelo body da requisição e utilizamos o método Post.

PS: Para possibilitar a leitura dos dados do body é necessários instalar a biblioteca body-parse.

Exemplo de função que recebe dados através do body:

```js
// ...
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
```

Interessante observar que no Express é possível termos rotas iguais. Mas isso só é possível com métodos HTTP diferentes.



Como é passado os parâmetros do body no fetch:

```js
fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});
```

- `method` : Método HTTP utilizado, como vimos no primeiro bloco temos 4 que são mais utilizados (GET, POST, PUT e DELETE).
- `headers` : Define algumas informações sobre a requisição como o atributo `Accept` que diz qual o tipo de dado esperado como resposta dessa requisição e o `Content-Type` que sinaliza que no corpo da requisição está sendo enviado um JSON.
- `body` : É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que queremos enviar para uma string JSON. Por isso que do lado do nosso back-end precisamos utilizar o `bodyParser` para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.

Também é possível enviar informações no **header**.

```js
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

  res.status(200).json({message: 'Valid Token!'})'
});
```

## Método `PUT` e `DELETE`

Métodos utilizados para modificar dados já existentes. O `PUT` para modificar:

```js
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();// 204 é status que indica que algo foi atualizado. E o end() indica que a resposta vai ser retornada sem retornar nenhuma informação.
});
```

E o `DELITE` para apagar algum dado:

```js
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});
```

Note utilizamos o `id` como parâmetro de rota. Essa é uma convenção serve para sempre que precisamos trabalhar com id seja para pesquisar, editar e remover objetos através da nossa API.

No front-end, para fazer requisições do tipo `PUT` e `DELETE` através do `fetch api` podemos utilizar os exemplos de código abaixo:

```js
// Requisição do tipo PUT
fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

// Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});
```

## Requisição para uma rota que não existe.

Devemos estabelecer uma mensagem mais amigável para os casos onde a rota passada não existe. Para retornar uma resposta mais amigável podemos usar o método `app.all` da seguinte forma:

```javascript
//...
app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);
```

**⚠️ Cuidado:** Essa definição de rota generalista com `app.all('*')` **deve ser sempre a última definição de rota** da nossa API.

