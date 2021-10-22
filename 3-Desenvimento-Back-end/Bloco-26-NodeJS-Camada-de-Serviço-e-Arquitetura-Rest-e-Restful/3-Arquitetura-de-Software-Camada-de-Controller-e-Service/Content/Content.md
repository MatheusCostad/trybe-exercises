# Controller e Service

- Controller: Receber e tratar dados.
- Services: Aplicar as regras de negócio da aplicação antes que qualquer comunicação com o banco seja realizada.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/architecture/msc/msc-part-2/images/architecture_layers-ea1a7edbd08e7a7648a207cacbbadbd1.png)

## A camada dos Controllers

O principal componente dessa camada são os middlewares. Neles a aplicação recebe os dados da requisição a passa apenas o necessário para a camada de services, e posteriormente devolve a respostada da requisição retornado das outras camadas.

## A camada dos Services

Fica situada entre as camadas de controller e model e é responsável pela nossa lógica de negócio e funções mais complexas de tratamento dos dados. 

- Deve centralizar acesso a dados e funções externas. Exemplo: chamar um evento que dispara uma mensagem no Slack;
- Deve abstrair lógica de negócio complexa do seu modelo;
- Não deve ter nenhum tipo de informação sobre o acesso a camada de dados. Exemplo: não ter nenhuma query SQL;
- Não deve receber nada relacionado ao HTTP, seja o `request` ou o `response` . O controller deve mandar apenas o necessário para o `service` .

## Boas Práticas em Arquitetura de Software

Indiferente de qual padrão arquitetural você vai usar, existem algumas boas práticas que você deve sempre manter em mente, independente do padrão a ser seguido.

### Pense antes de escrever o código

Antes de escolher uma arquitetura é importante entender qual o problema e como você pretende resolve-lo tendo assim uma melhor noção de qual arquitetura se encaixa melhor.

### Pense em Componentes

Dividir o código em pequenos blocos independentes. 

### Mantenha suas pastas organizadas

Existem algumas maneiras de organizar as pastas em um projeto, mas vamos citar duas: por **domínio/correlação** e por **papel técnico** .

- **Por domínio/correlação** , nós mantemos todos os arquivos que têm relação com um `Author` , por exemplo, na mesma pasta, independente da responsabilidade de cada arquivo:

```bash
└── author
│   ├── authorController.js
│   ├── authorService.js
│   └── authorModel.js
└── book
│   └── bookController.js
│   └── bookService.js
│   └── bookModel.js
```

- **Por papel técnico** é como temos exemplificado até agora (não que seja necessariamente melhor). Todos os controllers em uma pasta, todos os services em outra e por aí vai:

```bash
└── controllers
│   ├── authorController.js
│   └── bookController.js
└── services
│   ├── authorService.js
│   └── bookService.js
└── models
│   ├── authorModel.js
│   └── bookModel.js
```

Muitas vezes, você vai utilizar um framework em que essa decisão já foi tomada. Nesse caso, siga com o padrão.

### Mantenha o Express o **mais longe possível**

Isso significa manter os objetos `req` e `res` dentro do escopo do controller e **nunca** passá-los inteiros para as partes do app que cuidam da lógica de negócio. Exemplo:

```javascript
const userController = async (req, res) => {
  try {
    // ruim 😧
    await UserService.create(req);

    // bom! 😊
    const { email, password } = req.body;
    await UserService.create(email, password);

    res.send({ message: 'Tudo certo!' });
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};
```

### Mantenha sua configuração separada (e segura)

Uma ótima prática é usar variáveis de ambiente para controlar coisas relacionadas à configuração geral da sua aplicação (em qual banco se conectar, para qual URL apontar etc.). Variáveis de ambiente são variáveis que podem ser definidas no sistema operacional e, portanto, podem ser diferentes para cada ambiente (computador). Por exemplo, no seu computador local, a *URL* do banco é uma, mas, no servidor da aplicação, a *URL* do banco é outra. Para fazer isso funcionar, você pode utilizar uma variável de ambiente chamada `DB_URL` e utilizar valores diferentes para ela no servidor e na sua máquina local.

O ambiente Node tem uma variável global que se chama `process` ; dentro dela temos um objeto `env` que armazena os valores de todas as variáveis de ambiente definidas no sistema operacional.

Podemos setar variáveis de ambiente pelo terminal:

```bash
DB_URL="mongodb://localhost:27017" node index.js
```

```js
// index.js

console.log(process.env.DB_URL) // mongodb://localhost:27017
```

No entanto, uma forma melhor e mais fácil, quando temos muitas variáveis, é criar um arquivo `.env` na raiz do projeto e usar a biblioteca `dotenv` , que basicamente pega o conteúdo desse arquivo e o deixa acessível via `process.env` .

```bash
npm install dotenv
```

```bash
# .env
PORT=3000
DB_URL=mongodb://localhost:27017
DB_NAME=model_example
```

```js
// index.js

require('dotenv').config();
// ...

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// Server listening on port 3000
```

```js
// models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = process.env.DB_URL;

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(process.env.DB_NAME);
    return db;
    })
};

module.exports = connection;
```

Por último, não se esqueça de colocar o `.env` no `.gitignore` , pois não vamos querer versionar esse arquivo.

