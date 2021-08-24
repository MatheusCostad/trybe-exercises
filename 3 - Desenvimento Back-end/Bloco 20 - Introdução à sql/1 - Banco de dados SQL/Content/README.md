# SQL

Linguagem criada para manipular dados dentro de um banco de dados relacional.

### Principais Comandos:

- SELECT
- UPDATE
- DELETE
- INSERT
- WHERE

### Forma de armazenamento:

​	Todas as pesquisas realizadas dentro de um banco de dados são feitas em tabelas. Tabelas possuem linhas e colunas. 

### Constraints:

 - **NOT NULL** - Garante que aquele campo **não pode conter valores nulos**;
 - **UNIQUE** - Garante que o valor inserido na coluna da tabela é **único**;
 - **PRIMARY KEY** - A *chave primária* de uma tabela garante que a coluna em que essa *constraint* está sendo aplicada é **o identificador único da tabela** .
 - **FOREIGN KEY** - A *chave estrangeira* de uma tabela faz referência a uma chave primária (valor em uma coluna com a *constraint PRIMARY KEY* ) **de outra tabela** , permitindo um relacionamento entre as duas.
 - **DEFAULT** - Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a *constraint* **colocará o valor padrão que for passado para ela** .



# MySQL Server



### Instalando MySQL Server:

```shell
sudo apt update
sudo apt install mysql-server
sudo mysql_segure_installation
sudo systemctl status mysql
```

Desinstalando:

```shell
sudo apt-get remove mysql-server mysql-client mysql-common
sudo apt-get autoremove
sudo apt-get autoclean
sudo rm -rf /var/lib/mysql
sudo rm -rf /etc/mysql
```

Se a desinstalação for concluída com sucesso, o comando `mysql --version` **não** deve retornar a versão do seu mysql.

### Iniciar e parar serviço:

Iniciar:

```shell
systemctl start mysql
```

Parar:

```shell
systemctl stop mysql
```

### Acessando banco de dados:

```shell
mysql -u user-name -p
```

Para sair:

```sql
EXIT
```

### Exibir databases:

```sql
SHOW DATABASES;
```

### Criando um novo usuário:

```sql
CREATE USER 'user-name'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user-name'@'localhost';
FLUSH PRIVILEGES;
```

### Comandos mais comuns:

1. O comando `USE` serve para definir a **referência do banco de dados que será utilizado na query** :

```sql
USE nome_do_banco_de_dados_que_quero_conectar;
-- EX: USE trybe;
```

1.1 Uma outra forma de fazer referência ao banco, sem ter que rodar o `USE` é no formato `banco_de_dados.tabela` :

```sql
SELECT * FROM banco_de_dados.tabela;
-- EX: SELECT * FROM trybe.students;
```

2. Para retornar todas as tabelas inicializadas no seu server:

```sql
SHOW TABLES;
```

3. Visualizar estrutura de uma tabela:

```sql
DESCRIBE nome_da_tabela;
-- EX: DESCRIBE students;
```

4. Criar um banco de dados:

```sql
CREATE DATABASE nome_do_banco_de_dados;
-- EX: CREATE DATABASE trybe;
```

5. Excluir um banco de dados:

```sql
   DROP DATABASE databasename;
   -- EX: DROP DATABASE trybe;
```

# Fixação

### Part 1

Então, depois de ter visto o conteúdo acima, vamos tentar chegar a algumas conclusões utilizando como exemplo a tabela a seguir:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table1-a6228d5cf09aea61d1e205b18663d256.png)

Conteúdo da tabela address

Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder ao seguinte:

1. Quais *constraints* a coluna `address_id` poderia ter? Por quê?

   PRIMARY KEY - Pois a address_id serve para verificar e identificar um valor na tabela.

2. A coluna `city_id` é um número. Consegue identificar que tipo de *constraint* foi aplicado a ela?

   FOREIGN KEY - Pois a city_id serve como valor de referência para outra tabela. 

3. A coluna `address` (endereço) possui uma *constraint* . Qual tipo de *constraint* seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?

   NOT NULL - Pois garante que não sej apossível receber um valor nulo.

Temos aqui uma outra tabela:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table2-bc817500d0add9d388501e776cdd26d6.png)

Conteúdo da tabela `city`

1. Que tipo de *constraint* a coluna `city_id` possui?

   PRIMARY KEY - Pois a city_id serve para verificar e identificar um valor na tabela.

2. Qual é o motivo de a coluna `country_id` não possuir nomes de *country* (país)? Ela é algum tipo de chave primária ou estrangeira?

   FOREIGN KEY - Pois a country_id serve como valor de referência para outra tabela. 

Na tabela a seguir:

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table3-dfbcb99a6654c108ca5f6258e7a3dcd1.png)

Conteúdo da tabela `film`

1. Qual coluna possui uma ***primary key\*** ?

   film_id.

2. Qual coluna possui uma ***foreign key\***?

   category_id.

### Part 2

Usando os comandos que você acabou de ver, resolva os seguintes desafios:

1. Entre no banco de dados `mysql` .

   ```sql
   USE mysql;
   ```

2. Visualize todas as tabelas desse banco.

   ```sql
   SHOW TABLES;
   ```

3. Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.

   ```sql
   DESCRIBE ...;
   ```

4. Crie um novo banco de dados com o seu nome e depois entre nele!

   ```sql
   CREATE DATABASE matheus;
   USE matheus;
   ```
