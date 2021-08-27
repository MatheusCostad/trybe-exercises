# Conteúdo

### Query

Inquirir, ou **query** , em inglês, é o nome dado aos comandos que você digita dentro de uma janela ou linha de comando com a intenção de interagir de alguma maneira com uma base de dados.

#### DDL:

Data Definition Language

- `CREATE` : Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers
- `ALTER` : Para alterar a estrutura de qualquer objeto
- `DROP` : Permite deletar objetos
- `TRUNCATE` : Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados

#### DML:

Data Manipulation Language

- `SELECT` : usado para buscar dados em um banco de dados

- `INSERT` : insere dados em uma tabela

- `UPDATE` : altera dados dentro de uma tabela

- `DELETE` : exclui dados de uma tabela

#### DCL:

Data Control Language

- `GRANT` : concede acesso a um usuário

- `REVOKE` : remove acessos concedidos através do comando GRANT

#### TCL:

Transactional Control Language

- `COMMIT` : muda suas alterações de temporárias para permanentes no seu banco de dados

- `ROLLBACK` : desfaz todo o impacto realizado por um comando

- `SAVEPOINT` : define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua *query*

- `TRANSACTION` : comandos que definem onde, como e em que escopo suas transações são executadas

  

### CONCAT 

Cria uma nova coluna onde os dados são criados a partir da junção de duas ou mais colunas.

```sql
SELECT CONCAT (first_collun, last_collun) FROM db.table;
```



### DISTINCT

Recebe como parâmetro uma ou mais colunas e retorna os valores correspondentes sem itens duplicados. 

```sql
SELECT DISTINCT collun_name FROM db.table;
```



### COUNT

Recebe uma ou mais colunas como parâmetro e retorna o número de dados nessas colunas.

```sql
SELECT COUNT(collun_name) FROM db.table;
```

#### COUNT DISTINCT

Pode receber um DISTINCT como parâmetro também e nesse caso retorna o número sem contar as repetições.

```sql
SELECT COUNT(DISTINCT collun_name) FROM db.table;
```

#### COUNT WHERE

Combinado ao WHERE ele conta epenas os dados que passam na verificação.

```sql
SELECT COUNT(collun_name) FROM db.table
WHERE collun_name = 'parameter';
```



### LIMIT

Limita o tamanho da tabela que será retornada.

```sql
SELECT * FROM db.table LIMIT number;
```

#### OFFSET

Pula uma certa quantidade de linha. 

```sql
SELECT * FROM db.table LIMIT number OFFSET number;
```

### ORDER BY

Ordena os resultados de forma alfabética ou numérica, baseada na tabela que recebe como parâmetro. Também é possível ordenar por mais de uma coluna, caso haja valores repetidos na primeira, a tabela será ordenada pelos valores da segunda.

```sql
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;
```



# Fixação

### Parte 1

1. Monte uma *query* que exiba seu nome na tela;

   ```sql
   SELECT 'Matheus';
   ```

2. Monte uma *query* que exiba seu nome, sobrenome, cidade natal e idade na tela;

   ```sql
   SELECT 'Matheus','Costa','João Pessoa', '18';
   ```

3. Monte uma *query* que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o `AS` , que é chamado de `alias` na linguagem **SQL** ( *alias* é como um **apelido** no português);

   ```sql
   SELECT 'Matheus' AS nome,'Costa' AS sobrenome,'João Pessoa' AS cidade_natal, '18' AS idade;
   ```

4. Qual é o resultado de `13 * 8` ? Descubra usando apenas o `SELECT` ;

   ```sql
   SELECT 13*8;
   ```

5. Monte uma *query* que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

   ```sql
   SELECT now() AS data_atual;
   ```

Vamos agora entrar no banco de dados `sakila` e encontrar as seguintes informações, montando uma *query* para cada uma:

1. Escreva uma *query* que selecione todas as colunas da tabela `city` ;

   ```sql
   USE sakila;
   SELECT * FROM city;
   ```

2. Escreva uma *query* que exiba apenas as colunas `first_name` e `last_name` da tabela `customer` ;

   ```sql
   SELECT first_name, last_name FROM sakila.customer;
   ```

3. Escreva uma *query* que exiba todas as colunas da tabela `rental` ;

   ```sql
   SELECT * FROM sakila.rental;
   ```

4. Escreva uma *query* que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela `film` ;

   ```sql
   SELECT title, description, release_year FROM sakila.film;
   ```

5. Utilize o `SELECT` para explorar todas as tabelas do banco de dados.

   ```sql
   SELECT * FROM sakila.'...';
   ```



### Parte 2

1. Na tabela `sakila.film` , monte uma *query* que exiba o **título** e o **ano de lançamento** dos filmes em uma coluna e dê a ela o nome `Lançamento do Filme` .

   ```sql
   SELECT CONCAT (title, '(', release_year, ')') AS Lancamento_do_Filme FROM sakila.film;
   ```

2. Na tabela `sakila.film` , crie uma *query* que exiba o **título** do filme e sua **classificação indicativa** (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome `Classificação` . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

      ```sql
      SELECT CONCAT (title, ' - ', rating) AS Classificacao FROM sakila.film;
      ```

3. Na tabela `sakila.address` , monte uma *query* que exiba a **rua** e o **distrito** de cada registro em uma coluna apenas, e dê a essa coluna o nome `Endereço` .

   ```sql
   SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;
   ```



### Parte 3

1. Monte uma *query* para encontrar pares únicos de **nomes** e **idades** .

   ```sql
   SELECT DISTINCT Nome, Idade FROM Alunos;
   ```

2. Quantas linhas você encontraria na *query* anterior?

   5

3. Monte uma *query* para encontrar somente os **nomes** únicos.

   ```sql
   SELECT DISTINCT Nome FROM Alunos;
   ```

4. Quantas linhas você encontraria na *query* anterior?

   4

5. Monte uma *query* para encontrar somente as **idades** únicas.

   ```sql
   SELECT DISTINCT Idade FROM Alunos;
   ```

6. Quantas linhas você encontraria na *query* anterior?

   4

   

### Parte 4

1. **Quantas senhas** temos cadastradas nessa tabela?

   ```sql
   SELECT COUNT(password) FROM sakila.staff;
   -- 1
   ```

2. **Quantas pessoas** temos no total trabalhando para nossa empresa?

   ```sql
   SELECT COUNT(*) FROM sakila.staff;
   -- 2
   ```

3. **Quantos emails** temos cadastrados nessa tabela?

   ```sql
   SELECT COUNT(email) FROM sakila.staff;
   -- 2
   ```



### Parte 5

 Para os exercícios a seguir, vamos usar a tabela `sakila.film`

- Escreva uma *query* que exiba **todos os filmes** cadastrados no banco de dados.

  ```sql
  SELECT * FROM sakila.film;
  ```

- Escreva uma *query* que exiba apenas o **nome** dos filmes, seu **ano de lançamento** e sua **classificação** .

  ```sql
  SELECT title, release_year, rating FROM sakila.film;
  ```

- **Quantos filmes** temos cadastrados?

  ```sql
  SELECT COUNT(*) FROM sakila.film;
  -- 1000
  ```

Para os exercícios a seguir, vamos usar a tabela `sakila.actor`

- Escreva uma *query* que exiba apenas os **sobrenomes únicos** cadastrados.

  ```sql
  SELECT DISTINCT last_name FROM sakila.actor;
  ```

- **Quantos sobrenomes únicos** temos na tabela?

  ```sql
  SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
  -- 121
  ```

- Ordene os valores na tabela **em ordem crescente** de sobrenomes e **em ordem decrescente** de nome.

  ```sql
  SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC;
  ```

- Vá até a tabela `language` do `sakila` e crie uma pesquisa que mostre os **5 idiomas cadastrados** , mas **não mostre** o idioma `english` .

  ```sql
  SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
  ```

- Vá até a tabela `film` e selecione todos os dados da tabela. Pronto, fez isso?

  ```sql
  SELECT * FROM sakila.film;
  ```

- Agora vamos tentar fazer o seguinte: Crie uma *query* para encontrar os **20 primeiros filmes** , incluindo o **título** , o **ano de lançamento** , a **duração** , a **classificação indicativa** e o **custo de substituição** . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

  ```sql
  SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
  ORDER BY length DESC, replacement_cost LIMIT 20;
  ```

