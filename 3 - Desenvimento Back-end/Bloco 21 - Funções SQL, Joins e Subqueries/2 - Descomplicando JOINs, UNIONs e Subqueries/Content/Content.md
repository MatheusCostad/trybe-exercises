# Conteúdo

##  `JOIN`

O `INNER JOIN` permite retornar todos os resultados em que a condição da cláusula `ON` for satisfeita. Não há prioridade, ele retornar todos os valores não nulos.

```sql
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;
```

**LEFT JOIN** : quando utilizamos o `LEFT JOIN` , focamos a tabela da esquerda. Ele retornar todos os valores onde a coluna da esquerda não são nulos.

**RIGHT JOIN** : quando utilizamos o `RIGHT JOIN` , focamos a tabela da direita. Ele retornar todos os valores onde a coluna da direita não são nulos.

## `SELF JOIN`

Não se trata de um tipo diferente de `JOIN`. Se trata de um `JOIN` feito usando apenas uma tabela. 

```sql
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;
```

## `UNION` e o `UNION ALL`

O `UNION` é utilizado em casos que queremos retornar registros de uma tabela na outra. Por padrão ele elimina repetições, caso não queira que isso aconteça utilize o `UNION ALL`.

```sql
(SELECT first_name, last_name, '_' AS 'coustumer_id' FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name, custumer_id FROM sakila.custumer)
ORDER BY first_name;
```

**PS**: O `UNION` só funciona caso haja o mesmo número de colunas no retorno de ambas as tabelas. Outro ponto importante é enclausurar dentro de parênteses a query de cada tabela.

## `SUBQUERY`

Uma `SUBQUERY` é uma query aninhada que é avaliada dentro de um par de parênteses. Elas são extremante versáteis e podem ser utilizadas em diversos contextos.

### `FROM:`

```sql
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;
```

### `SELECT`

```sql
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;
```

### `WHERE`

```sql
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);
```

## `EXISTS`

O intuito principal do `EXISTS` é Retornar os registros da tabela A que possuem um relacionamento com os registros da tabela B.

```sql
SELECT id, title
FROM hotel.Books AS b
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id
);
```


# Fixação

