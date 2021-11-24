# Checklist

- [Garanta que o MongoDB esteja devidamente instalado.](../../../Bloco-22-Introducao-ao-MongoDB)

- [Configure o Express](../../../Bloco-25-Introducao-ao-desenvolvimento-Web-com-NodeJS/4-Express:-HTTP-com-Node.js/Content/checklistExpress.md)

- Instale o driver oficial:

  ```shell
  npm install mongodb
  ```

- Na raiz do projeto crie uma pasta `models` e, dentro dela, crie um arquivo `connection.js` e preencha-o com o código abaixo:

  ```js
  // models/connection.js
  
  const { MongoClient } = require('mongodb');
  
  const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  };
  
  const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
  
  let db = null;
  
  const connection = () => {
      return db
      ? Promise.resolve(db)
      : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
      db = conn.db('model_example');
      return db;
      });
  };
  
  module.exports = connection;
  ```

- `useNewUrlParser` : o time do mongodb reescreveu a forma que o driver utiliza para interpretar a URL de conexão ao banco. Por ser uma mudança muito grande, essa nova forma de interpretação de URLs só é ativada com o uso dessa flag. A forma antiga, no entanto, está depreciada, e seu uso emite um *warning* no terminal.
- `useUnifiedTopology` : nas versões mais recentes do driver do mongodb, a ferramenta que realiza a descoberta de servidores e a conexão com os mesmos foi alterada. Essa flag diz para o driver do mongodb que queremos utilizar essa nova forma de conexão. A forma de conexão antiga está depreciada, e seu uso emite um *warning* no terminal.