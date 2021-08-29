# Conteúdo

#### Diferentes tipos de aspas:

- Aspas Simples - Deve ser usada em valores do tipo string. 
- Crase - Usada para identificar nome de colunas ou tabelas que contenham espaços vazios ou quando se tratar de uma palavra reservada.  

### INSERT

Útil para adicionar valores na tabela, recebendo como parâmetros o nome da tabela, nome da coluna e os valores a serem inseridos. Quando a coluna ainda não existe, ela é criada.

```sql
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
```

É possível inserir múltiplas linhas em uma tabela com uma única *query* :

```sql
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
```

Ignorar linhas existentes:

Ao adicionar um `IGNORE` após o `INSERT` linhas que poderiam causar erros são ignoradas. EX: Primary keys duplicadas.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/SimpleTableData1-e74f5b1a4c4a1bef95d8225b33ddf116.png)

Tabela `pessoas`

```sql
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;
```

#### INSERT SELECT 

Insere dados de outra tabela.

```sql
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;
```

###  UPDATE

Altera dados já inseridos dentro de uma tabela.

```sql
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!
```

#### Safe Updates Mode

Só permite que dados sejam alterados a partir de seu id. Como desativar:

```sql
SET SQL_SAFE_UPDATES = 0; -- Para ativar basta passar um '1' no lugar do '0'
```

#### UPDATE sequencial

- ORDER BY -  os resultados serão alterados na ordem em que forem encontrados.
- LIMIT -  um limite será imposto na quantidade de resultados que podem ser alterados. 

```sql
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];
```

### DELETE

Apaga os dados especificados da `WHERE`.

```sql
DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
```

**P.S.** Novamente, caso o modo `--safe-updates` esteja habilitado, o comando `DELETE` só funcionaria se os IDs fossem incluídos em suas *queries* .

Caso haja relações entre as tabelas ( **primary key** e **foreign keys** ) e existam restrições aplicadas a elas, ao executar o `DELETE` ocorrerá uma ação de acordo com a restrição que tiver sido imposta na criação da **foreign key** . Essas restrições podem ser as seguintes:

```sql
-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;
```

ATENÇÃO: Caso a `WHERE` não tenha sido passada toda a tabela é excluída. Nesse caso o comando `TRUNCATE` se torna mais apropriado.

# Fixação

### PARTE 1

1. Insira um novo funcionário na tabela `sakila.staff` .

   Para saber quais campos são obrigatórios, clique com o botão direito na tabela `sakila.staff` e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

   ```sql
   INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, username)
   VALUES ('Adam', 'Driver', 5, 'adaomotorista@test.com', 1, 'Adão');
   ```

2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma *query* .

   ```sql
   INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, username)
   VALUES('Robert', 'Pattinson', 6, 'robertinho@test.com', 1, 'Robert'),
   ('Willem', 'Dafoe', 7, 'willsomdepapagaio@test.com', 2, 'Will');
   ```

3. Selecione os cinco primeiros nomes e sobrenomes da tabela `sakila.customer` e cadastre essas pessoas como atores na tabela `sakila.actor` .

   ```sql
   INSERT INTO sakila.actor (first_name, last_name)
   SELECT first_name, last_name FROM sakila.customer
   ORDER BY customer_id LIMIT 5;
   ```

4. Cadastre três categorias de uma vez só na tabela `sakila.category` .

   ```sql
   INSERT INTO sakila.category(`name`)
   VALUES('Space Opera'), ('Cyber Punk'), ('National');
   ```

5. Cadastre uma nova loja na tabela `sakila.store` .

   ```sql
   INSERT INTO sakila.store(manager_staff_id, address_id)
   VALUES (4,3);
   ```

### PARTE 2

1. Atualize o primeiro nome de todas as pessoas da tabela `sakila.actor` que possuem o primeiro nome "JULIA" para "JULES".

   ```sql
   SET SQL_SAFE_UPDATES = 0;
   UPDATE sakila.actor SET first_name = 'JULIES'
   WHERE first_name = 'JULIA';
   SET SQL_SAFE_UPDATES = 1;
   ```

2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

   ```sql
   SET SQL_SAFE_UPDATES = 0;
   UPDATE sakila.category SET `name` = 'Science Fiction'
   WHERE `name` = 'Sci-Fi';
   SET SQL_SAFE_UPDATES = 1;
   ```

3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações **"G"** , **"PG"** ou **"PG-13"** e um custo de substituição maior que $20.

   ```sql
   SET SQL_SAFE_UPDATES = 0;
   UPDATE sakila.film SET rental_rate = 25
   WHERE length > 100
   AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
   AND replacement_cost > 20;
   SET SQL_SAFE_UPDATES = 1;
   ```

4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

   ```sql
   SET SQL_SAFE_UPDATES = 0;
   UPDATE sakila.film
   SET rental_rate = (
       CASE
           WHEN length BETWEEN 1 AND 100 THEN 10
           WHEN length > 100 THEN 20
       END
   );
   SET SQL_SAFE_UPDATES = 1;
   ```

### PARTE 3

1. Exclua do banco de dados o ator com o nome de "KARL".

   ```sql
   DELETE FROM sakila.film_actor
   WHERE actor_id = 12;
   DELETE FROM sakila.film_actor
   WHERE actor_id = 12;
   ```

2. Exclua do banco de dados os atores com o nome de "MATTHEW".

   ```sql
   DELETE FROM sakila.film_actor
   WHERE actor_id IN (8, 103, 181);
   SET SQL_SAFE_UPDATES = 0;
   DELETE FROM sakila.actor
   WHERE first_name = 'MATTHEW';
   SET SQL_SAFE_UPDATES = 1;
   ```

3. Exclua da tabela `film_text` todos os registros que possuem a palavra "saga" em suas descrições.

   ```sql
   SET SQL_SAFE_UPDATES = 0;
   DELETE FROM sakila.film_text
   WHERE DESCRIPTION LIKE '%saga%';
   SET SQL_SAFE_UPDATES = 1;
   ```

4. Apague da maneira mais performática possível todos os registros das tabelas `film_actor` e `film_category` .

   ```sql
   TRUNCATE sakila.film_actor;
   TRUNCATE sakila.film_category;
   ```
