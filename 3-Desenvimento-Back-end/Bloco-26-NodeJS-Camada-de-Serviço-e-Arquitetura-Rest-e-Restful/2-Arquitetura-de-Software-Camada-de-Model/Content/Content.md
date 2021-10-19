# Camada de Model

Camada de arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries. O `model` é responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados.

É no `model` que verificaríamos se o novo usuário que estamos tentando criar é válido de acordo com as regras de negócio definidas, ou se a pessoa que está tentando apagar um post tem permissão para tal.

Ter um `model` independente e isolado das outras camadas facilita a manutenção do código, pois alterações em outras camadas não terão impacto nos seus modelos e vice-versa. Outra vantagem é apossibilidade de criar uma versão CLI da nossa aplicação somente utilizando a API que ela define, sem nenhuma duplicação de código.

Vamos a um rápido exemplo sem muitos detalhes para fixar melhor o conceito:

```js
// userModel.js

const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}
```

```js
// cli.js

const readline = require('readline-sync');
const userModel = require('./userModel');

async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);

    if (!user) {
        return console.log('Usuário não encontrado');
    }

    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}

start();
```

Também é possível usar um model em um middleware:

```js
// getUserMiddleware.js

const userModel = require('./userModel');

async function getUserMiddleware (req, res, next) {
    const { username } = req.body;

    const user = await userModel.getUser(username);

    if (!user) {
        return res.status(404).json({ message: 'user não encontrado' });
    }

    return res.status(200).json(user);
}
```

## Model com MySQL

[Checklist](./ChecklistMySQLExpress.md)

[Exemplo](./Exemples/model-exemple-MySQL)

## Model com MongoDB

[Checklist](./ChecklistMongoDBExpress.md)

[Exemplo](./Exemples/model-exemple-MongoDB)
