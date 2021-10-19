# Checklist

- [Garanta que o MySQL esteja devidamente instalado.](../../../Bloco-19-Introducao-a-sql)
- [Configure o Express](../../../Bloco-25-Introducao-ao-desenvolvimento-Web-com-NodeJS/4-Express:-HTTP-com-Node.js/Content/checklistExpress.md)

Para que possamos nos comunicar com o MySQL, precisamos de um **driver** . Um driver é um software que permite que você se comunique com o banco de dados a partir de uma aplicação.

- Instale o driver `mysql2`:

  ```shell
  npm install mysql2
  ```

- Na raiz do projeto crie uma pasta `models` e, dentro dela, crie um arquivo `connection.js` e preencha-o com o código abaixo:

  ```js
  // models/connection.js
  
  const mysql = require('mysql2/promise');
  
  const connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'senha123',
      database: 'model_example' });
  
  module.exports = connection;
  ```

- `host` : local onde o servidor do MySQL está armazenado. Como estamos executando localmente, usamos `localhost` ;

- `user` : usuário que vamos utilizar para acessar o banco. Estamos usando o usuário `root` nesse exemplo;

- `password` : senha do usuário especificado. Coloque `''` se não houver senha para o usuário;

- `database` : nome do banco ao qual queremos nos conectar;

O método `createPool` retorna um objeto Pool representando uma sessão com o banco.
