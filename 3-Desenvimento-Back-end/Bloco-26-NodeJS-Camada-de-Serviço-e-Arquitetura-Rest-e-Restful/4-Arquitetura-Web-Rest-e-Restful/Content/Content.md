# Arquitetura Web - Rest e Restful

Antes de começarmos, vamos entender a diferença entre REST e RESTful: RESTful é, basicamente, um web service que segue as regras definidas pelo padrão REST.

## REST

O REST deve ser visto como um conjunto de boas práticas. Quando você está construindo uma API, existem algumas normas que você deve seguir para ser "educado" (RESTful). Para o REST a aplicação é um conjunto de recursos que ao serem consumidos retornam seu estado ou alteram o mesmo.

### Mas o que é um Recurso, afinal?

Um recurso, em REST, é uma abstração da informação. Dito isso, qualquer coisa que possa ser nomeada pode ser um recurso. Por exemplo:

- Usuários;
- Produtos;
- Compras;

No universo de Star Wars existem vários planetas. Na [SWAPI ](https://swapi.dev/), podemos chamar um endpoint para listar todos os planetas ou apenas um. Nesse caso, **um planeta é um recurso** , e **planetas é uma coleção de recursos** .

## 6 restrições para ser RESTful

### 1 - Interface uniforme

A interface deve manter um padrão rígido desde como é feita a requisição na URL, até como os códigos de resposta são retornados.

#### Recursos e coleções

O recurso ser acessado deve ser nomeado na URL, não importando se está no plural ou no singular, por tanto que todas as URLs que acessam esse recurso mantenham um padrão.

#### Tipo de retorno

 O retorno deve ser sempre igual no sentido de formato. Alguns formatos comuns são `JSON` , `XML` e `JavaScript` , e no header através da chave `Content-type` informamos o formato retornado da seguinte forma:  `Content-type: application/json` ou `Content-type: text/html`.

Se o cliente pede ou envia informação no formato JSON, você deve processar e retornar mantendo o formato JSON. Se um erro em um endpoint retorna os campos `code` , `error` e `message` , todos os erros devem retornar, pelo menos, esses campos.

Dentro do JSON podemos retornar tanto arrays quanto objetos, então é importante manter um padrão, sempre retornando o JSON no mesmo formato.

#### Ações/Verbos

Os verbos usados na requisição devem sempre corresponder a ação realizada. Para o REST, os principais verbos HTTP são `POST` , `GET` , `PUT` e `DELETE`.

As tabelas abaixo relacionam cada verbo com sua ação em caso de coleções ou recursos:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/architecture/rest/images/REST-collection-requests-112a76d24130c658fed1e68c8e99ecdd.png)

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/architecture/rest/images/REST-resource-requests-32666fb35463a819c19b730740e48b2c.png)

#### Respostas

Respostas são sempre obrigatórias. Nunca deixe seu cliente sem resposta, mesmo que ela não tenha um corpo.

Existem boas práticas em relação aos `status code` que nosso servidor envia como resposta. Existe [uma lista ](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)completa e detalhada sobre códigos de status HTTP disponibilizada pela Mozilla.

### 2 - Arquitetura cliente-servidor

O cliente e o servidor devem estar completamente independente um do outro fazendo com que o desenvolvimento de um não influencie no do outro.

Não importa quem é nosso cliente, as nossas APIs têm que conseguir retornar dados para ele. O cliente pode ser um app mobile, web, tv, arduíno etc.

### 3 - Sem estado ( *Stateless* )

Não manter estado significa que **toda requisição deve conter todas as informações necessárias para nossa API realizar uma ação** . Desse jeito, não podemos reutilizar nenhum contexto que está armazenado no servidor (uma variável, por exemplo).

Esse ponto é importante, pois nos dá alguns benefícios:

- **Transparência** : facilita o trabalho do lado do servidor, pois todas as informações necessárias já estão na requisição;
- **Escalabilidade** : sem precisar manter estado, nosso servidor pode desalocar recursos que foram alocados para realizar uma ação específica e alocá-los apenas quando necessário.

### 4 - *Cacheable*

**As respostas dadas pela nossa API devem dizer, explicitamente, se podem ou não ser cacheadas e por quanto tempo** . Com isso, evita-se que clientes forneçam respostas "velhas" ou inapropriadas.

No HTTP, o cache é definido pelo header `Cache-Control: max-age=120` . Nesse caso, o cliente "cacheia" a resposta da requisição por 120 segundos. Durante esse tempo, o cliente fornecerá a resposta cacheada, sem precisar consultar o servidor.

### 5 - Sistema em camadas ( *Layered System* )

Devemos abstrair do cliente as camadas necessárias para responder a requisição.

Não importa se você tem uma "API A" que se comunica com a "API B" que se comunica com uma fila ou um arquivo num "local C", ou se consulta um banco de dados, ou se esse banco de dados é local ou está armazenado em outro lugar. Quem consome a API não precisa saber de onde essas coisas estão vindo. Só precisa receber a resposta esperada.

### 6 - Código sob demanda ( *Code on Demand* )

Esse princípio consiste em dar a possibilidade de o nosso servidor enviar código (JavaScript, por exemplo) ao nosso cliente, onde será executado. Assim, você consegue customizar o comportamento do cliente.

Um exemplo prático: enviar um "widget" para colocar na página um chat para que o cliente possa conversar com alguém.

Você não precisa implementar código sob demanda para ser RESTful, logo esse item é considerado opcional.

## Consumindo APIs

Para fazer requisições de API no Node é utilizada a biblioteca `axios`.

```shell
npm i axios
```

```js
const axios = require('axios').default;
```

