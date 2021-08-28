# Conteúdo

### WHERE

Verifica se o dado corresponde ao parâmetro comparativo. Caso contrário ele não será retornado na query.

```sql
SELECT * FROM db.table
WHERE column = 0.99;
```



### Operadores Lógicos

São os operadores de comparação passados na comparação.

```sql
-- OPERADOR - DESCRIÇÃO
=   IGUAL
>   MAIOR QUE
<   MENOR QUE
>=  MAIOR QUE OU IGUAL
<=  MENOR QUE OU IGUAL
<>  DIFERENTE DE
AND OPERADOR LÓGICO E
OR  OPERADOR LÓGICO OU
NOT NEGAÇÃO
IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)
```

#### PS:  É importante relembrar a precedência dos operadores :

1. Parênteses
2. Multiplicação/Divisão
3. Subtração/Adição
4. NOT
5. AND
6. OR



### LIKE

Retorna os dados que possuem determinado trecho passado como parâmetro.

```sql
SELECT * FROM db.table
WHERE collumn LIKE '%st_ing%';
```

#### Caracteres curingas 

- "%" - Corresponde a qualquer valor independente do número de carateres
- "_" - Corresponde a apenas um caractere



### IN

Se o dado é igual a algum dos parâmetros ele é retornado na query.

```sql
SELECT * FROM db.table
WHERE collumn IN (valor1, valor2, valor3, valor4, ..., valorN);
```



### BETWEEN

Retorna a query com os valores presentes dentro do intervalo passado como parâmetro.

```sql
SELECT * FROM db.table
WHERE collumn BETWEEN 50 AND 120;
```



### Dados Temporais

| Date and Time Types                                 | Description                                         |
| :-------------------------------------------------- | :-------------------------------------------------- |
| [`DATE`](https://www.mysqltutorial.org/mysql-date/) | A date value in `CCYY-MM-DD` format                 |
| `TIME`                                              | A time value in `hh:mm:ss` format                   |
| `DATETIME`                                          | A date and time value in`CCYY-MM-DD hh:mm:ss`format |
| `TIMESTAMP`                                         | A timestamp value in `CCYY-MM-DD hh:mm:ss` format   |
| `YEAR`                                              | A year value in `CCYY` or `YY `format               |

```sql
SELECT DATE(column) FROM db.table; -- YYYY-MM-DD
SELECT YEAR(column) FROM db.table; -- Ano
SELECT MONTH(column) FROM db.table; -- Mês
SELECT DAY(column) FROM db.table; -- Dia
SELECT HOUR(column) FROM db.table; -- Hora
SELECT MINUTE(column) FROM db.table; -- Minuto
SELECT SECOND(column) FROM db.table; -- Segundo
```

# Fixação

### Parte 1

1. Precisamos identificar os dados do cliente com o e-mail `LEONARD.SCHOFIELD@sakilacustomer.org` .
   ```sql
   SELECT * FROM sakila.customer
   WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
   ```
   
2. Precisamos de um relatório dos nomes dos clientes, em `ordem alfabética` , que não estão mais ativos no nosso sistema e pertencem à loja com o **id = 2** , e não inclua o cliente `KENNETH` no resultado.

   ```sql
   SELECT first_name FROM sakila.customer
   WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
   ORDER BY first_name;
   ```

3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( *replacement_cost* ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em `ordem alfabética` pelo título.

   ```sql
   SELECT title, description, release_year, replacement_cost FROM sakila.film
   WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
   ORDER BY replacement_cost DESC, title
   LIMIT 100;
   ```

4. Quantos clientes estão `ativos` e na loja `1` ?

   ```sql
   SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
   WHERE active = 1 AND store_id = 1;
   -- 318
   ```

5. Mostre todos os detalhes dos clientes que `não` estão ativos na loja `1` .

   ```sql
   SELECT * FROM sakila.customer
   WHERE active = 0 AND store_id = 1;
   ```

6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a `menor` taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em `ordem alfabética` pelo título.

   ```sql
   SELECT title FROM sakila.film
   WHERE rating = 'NC-17' 
   ORDER BY rental_rate, title
   LIMIT 50;
   ```

### Parte 2

1. Mostre todos os detalhes dos filmes que contêm a palavra `ace` no nome.

   ```sql
   SELECT * FROM sakila.film
   WHERE title LIKE '%ace%';
   ```

2. Mostre todos os detalhes dos filmes cujas descrições finalizam com `china` .

   ```sql
   SELECT * FROM sakila.film
   WHERE description LIKE '%china';
   ```

3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra `girl` e o título finaliza com a palavra `lord` .

   ```sql
   SELECT * FROM sakila.film
   WHERE description LIKE '%girl%' AND title LIKE '%lord';
   ```

4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra `gon` .

   ```sql
   SELECT * FROM sakila.film
   WHERE title LIKE '___gon%';
   ```

5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra `gon` e a descrição contém a palavra `Documentary` .

   ```sql
   SELECT * FROM sakila.film
   WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
   ```

6. Mostre os dois filmes cujos títulos ou finalizam com `academy` ou iniciam com `mosquito` .

   ```sql
   SELECT * FROM sakila.film
   WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
   ```

7. Mostre os seis filmes que contêm as palavras `monkey` e `sumo` em suas descrições.

   ```sql
   SELECT * FROM sakila.film
   WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
   ```

### Parte 3

1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: `hicks, crawford, henry, boyd, mason, morales e kennedy` , ordenados por nome em ordem alfabética.

   ```sql
   SELECT first_name, last_name, email  FROM sakila.customer
   WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
   ORDER BY first_name;
   ```

2. Mostre o e-mail dos clientes com os `address_id 172, 173, 174, 175 e 176` , ordenados em ordem alfabética.

   ```sql
   SELECT email FROM sakila.customer
   WHERE address_id BETWEEN 172 AND 176
   ORDER BY email;
   ```

3. Descubra quantos pagamentos foram feitos entre `01/05/2005` e `01/08/2005` . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato `ano/mês/dia` , diferente do formato brasileiro, que é `dia/mês/ano` .

   ```sql
   SELECT COUNT(*) FROM sakila.payment
   WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
   ```

4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de `3 a 6` . Os resultados devem ser classificados em filmes com `maior duração` de empréstimo primeiro. Em caso de empate, ordene em `ordem alfabética` pelo título.

   ```sql
   SELECT title, release_year, rental_duration FROM sakila.film
   WHERE rental_duration BETWEEN 3 AND 6
   ORDER BY rental_duration DESC, title;
   ```

5. Monte um relatório que exiba o título e classificação dos `500` primeiros filmes direcionados para as classificações indicativas `G, PG e PG-13` . Os resultados devem estar `ordenados` por título.

   ```sql
   SELECT title, rating FROM sakila.film
   WHERE rating IN('G', 'PG', 'PG-13')
   ORDER BY title
   LIMIT 500;
   ```

### Parte 4

1. Quantos pagamentos temos com a data de retorno `2005-05-25` ? Há múltiplas maneiras possíveis de encontrar a resposta.

   ```sql
   SELECT COUNT(*) Pagamentos FROM sakila.payment
   WHERE DATE(payment_date) = '2005-05-25'; -- FORMA MAIS PERFORMÁTICA
   -----
   SELECT COUNT(*) Pagamentos FROM sakila.payment
   WHERE payment_date LIKE '2005-05-25%';
   -----
   SELECT COUNT(*) Pagamentos FROM sakila.payment
   WHERE payment_date BETWEEN '2005-05-25 00:00:00' AND '2005-05-25 23:59:59'; 
   ```

2. Quantos pagamentos foram feitos entre `01/07/2005` e `22/08/2005` ?

   ```sql
   SELECT COUNT(*) Pagamentos FROM sakila.payment
   WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
   ```

3. Usando a tabela `rental` , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com `rental_id` = 10330. Utilize a coluna `rental_date` para extrair as informações.

   ```sql
   SELECT DATE(rental_date) AS Data,
   YEAR(rental_date) AS Ano ,
   MONTH(rental_date) AS Mes,
   DAY(rental_date) AS Dia,
   HOUR(rental_date) AS Hora,
   MINUTE(rental_date) AS Minuto,
   SECOND(rental_date) AS Segundo
   FROM sakila.rental
   WHERE rental_id = 10330;
   ```

4. Monte uma *query* que retorne todos os dados do pagamento feito no dia `28/07/2005` a partir das `22 horas` .

   ```sql
   SELECT * FROM sakila.payment
   WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
   ```

