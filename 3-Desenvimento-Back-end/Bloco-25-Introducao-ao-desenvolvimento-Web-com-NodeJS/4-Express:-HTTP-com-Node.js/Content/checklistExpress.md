# Passo a passo para iniciar uma aplicação Express.
- Iniciando aplicação node:

  ```shell
  npm init -y
  ```

- Instalando o express:

  ```shell
  npm i express
  ```

- Instalar o nodemon para que sempre que ocorrer uma edição no arquivo a aplicação seja reiniciada.

  ```shell
  npm i nodemon -D
  ```
  
- Instalar o `cors` para permitir que nossa aplicação seja possa receber requisições do front-end:

   ```shell
   npm i cors
   ```
  
- Adicionar a seguinte linha no `package.json`:

  ```js
  //...
  // "scripts": {
  //    "test": "echo \"Error: no test specified\" && exit 1",
  		"start": "node index.js",
  	"dev": "nodemon index.js"
  //  },
  // ...
  ```
  
- Preencher o arquivo `index.js`:

  ```javascript
  const express = require('express');
  const app = express(); // 1
  const cors = require('cors');
  
  app.use(cors());
  
  app.get('/caminho', functionRequeste); // 2
  
  app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
  }); // 3
  
  function functionRequeste(_req, res) {
    res.status(200).send('Success!'); // 4
  }
  ```

Esse pequeno script é o suficiente para:

1. Criar uma nova aplicação Express;
2. Dizer ao Express que, quando uma requisição com método `GET` for recebida no caminho `/caminho` , a função `functionRequest` deve ser chamada;
3. Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
4. Ao tratar uma requisição com método `GET` no caminho `/caminho` , enviar o status HTTP `200` que significa `OK` e a mensagem "Success!".

- Executar a aplicação com:

  ```shell
  npm run dev
  ```

- Caso seja precise receber dados do Body será necessário instalar o body-parser:

  ```shell
  npm i body-parser
  ```

- Agora no arquivo `index.js` , faça a modificação abaixo:

  ```js
  // const express = require('express');
  const bodyParser = require('body-parser');
  
  // const app = express();
  app.use(bodyParser.json());
  
  // ...
  ```
