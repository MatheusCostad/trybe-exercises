# Conteúdo

## Manipulação de strings

```sql
-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 6);

-- Exibe o tamanho, em caracteres, da string
SELECT LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);
```

## Condicionais

### `IF`

```sql
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);
```

### `CASE`

```sql
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;
```

## Funções matemáticas do MySQL

### Operadores básicos

```sql
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;
```

### `DIV`

Retorna o resultado inteiro de uma divisão.

```sql
SELECT 10 DIV 3; -- 3
```

### `MOD`

Retorna o resto de uma divisão.

```sql
SELECT 10 MOD 3; -- 1
```

### Arredondando Valores

O `ROUND ` arredonda os números com base na parte decimal. 

```sql
SELECT ROUND(10.4925); -- 10
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925, 2); -- 10.49
```

O arredondamento **sempre** para cima pode ser feito com o `CEIL` :

```sql
SELECT CEIL(10.2); -- 11
```

O arredondamento **sempre** para baixo pode ser feito com o `FLOOR` :

```sql
SELECT FLOOR(10.51); -- 10
```

### `POW` 

Eleva um número X à potência Y.

```sql
SELECT POW(2, 4); -- 16
```

### `SQRT`

Encontra a raiz quadrada de um valor.

```sql
SELECT SQRT(16); -- 4
```

###  `RAND` 

Gera um número aleatório.

```sql
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));
```

### Trabalhando com datas

Funções que retornam a data e hora no momento:

```sql
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
```

Podemos extrair qualquer parte de uma data de uma coluna:

```sql
SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual
```

`DATEDIFF` é usado para calcular a diferença entre duas datas, e o `TIMEDIFF` calcula a diferença entre as horas:

```sql
SELECT DATEDIFF('2020-01-01', '2020-01-31');
-- -30, ou seja, a primeira data é 30 dias antes da segunda

SELECT TIMEDIFF('08:30:10', '09:30:10');
-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
```

### Utilizando as funções de agregação `AVG` , `MIN` , `MAX` , `SUM` e `COUNT`

```sql
-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)
```

 ### `GROUP BY` 

Agrupa os resultados de uma query em uma ou mais colunas.

```sql
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);
```

É mais comum utilizar o `GROUP BY` em conjunto com o `AVG` , `MIN` , `MAX` , `SUM` ou `COUNT` . Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o `COUNT()` . Assim, teremos uma informação mais fácil de ser compreendida.

```sql
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```

### `HAVING`

Utilizado para filtrar resultados agrupados.

```sql
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;
```

# Fixação

## Parte 1 - Manipulação de strings

```sql
SELECT UCASE('Oi, eu sou uma string') AS 'Upercase',
LCASE('Oi, eu sou uma string') AS 'Lowercase',
REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres') AS 'Replace',
LEFT('Oi, eu sou uma string', 3) AS 'Left',
RIGHT('Oi, eu sou um string', 6) AS 'Right',
LENGTH('Oi, eu sou uma string') AS 'Lenght',
SUBSTRING('Oi, eu sou uma string', 5, 2) AS 'Substring',
SUBSTRING('Oi, eu sou uma string', 5) AS 'NewSubstring';
```

1. Faça uma *query* que exiba a palavra `'trybe'` em CAIXA ALTA.

   ```sql
   SELECT UCASE('trybe');
   ```

2. Faça uma *query* que transforme a frase `'Você já ouviu falar do DuckDuckGo?'` em `'Você já ouviu falar do Google?'` .

   ```sql
   SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
   ```

3. Utilizando uma *query* , encontre quantos caracteres temos em `'Uma frase qualquer'` .

   ```sql
   SELECT LENGTH('Uma frase qualquer');
   -- 18
   ```

4. Extraia e retorne a palavra "JavaScript" da frase `'A linguagem JavaScript está entre as mais usadas'` .

   ```sql
   SELECT REPLACE('A linguagem JavaScript está entre as mais usadas', 'JavaScript', '');
   ```

5. Por fim, padronize a string `'RUA NORTE 1500, SÃO PAULO, BRASIL'` para que suas informações estejam todas em caixa baixa.

   ```sql
   SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
   ```


## Parte 2 - Condicional

1. Usando o `IF` na tabela `sakila.film` , exiba o **id do filme** , o **título** e uma coluna extra chamada **'conheço o filme?'** , em que deve-se avaliar se o nome do filme é ' **ACE GOLDFINGER** '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.

   ```sql
   SELECT
       film_id,
       title,
       IF(title = 'ACE GOLDFINGER', 'Já assistí o filme', 'Não conheço o filme') AS 'conheço o filme?'
   FROM sakila.film;
   ```

2. Usando o `CASE` na tabela `sakila.film` , exiba o **título** , a **classificação indicativa** ( `rating` ) e uma coluna extra que vamos chamar de **'público-alvo'** , em que classificaremos o filme de acordo com as seguintes siglas:

   - **G:** "Livre para todos";
   - **PG:** "Não recomendado para menores de 10 anos";
   - **PG-13:** "Não recomendado para menores de 13 anos";
   - **R:** "Não recomendado para menores de 17 anos";
   - **Se não cair em nenhuma das classificações anteriores:** "Proibido para menores de idade".

   ```sql
   SELECT
       title,
       rating,
       CASE
           WHEN rating = 'G' THEN 'Livre para todos'
           WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
           WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
           WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
           ELSE 'Proibido para menores de idade'
       END AS 'público Alvo'
   FROM sakila.film;
   ```

## Parte 3 - Funções matemáticas

1. Monte uma *query* usando o `MOD` juntamente com o `IF` para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de **'Par ou Ímpar'** , onde ela pode dizer 'Par' ou 'Ímpar'.

   ```sql
   SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
   ```

2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

   ```sql
   SELECT 220 DIV 12;
   ```

3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

   ```sql
   SELECT 220 MOD 12;
   ```

4. Monte uma *query* que gere um valor entre **15** e **20** .

   ```sql
   SELECT FLOOR(15 + (RAND() * 5));
   ```

5. Monte uma *query* que exiba o valor arredondado de **15.7515971** com uma precisão de 5 casas decimais.

   ```sql
   SELECT ROUND(15.7515971, 5);
   ```

6. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o **valor aproximado** para baixo dessa média?

   ```sql
   SELECT FLOOR(39.494);
   ```

7. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o **valor aproximado** para cima dessa média?

   ```SQL
   SELECT CEIL(85.234);
   ```

### Parte 4 - Trabalhando com datas

1. Monte uma *query* que exiba a diferença de dias entre `'2030-01-20'` e hoje.

   ```sql
   SELECT DATEDIFF('2030-01-20', CURRENT_DATE()); --  3055
   ```

2. Monte uma *query* exiba a diferença de horas entre `'10:25:45'` e `'11:00:00'` .

   ```sql
   SELECT TIMEDIFF('10:25:45', '11:00:00'); -- -00:34:15
   ```

### Parte 5 - Utilizando as funções de agregação `AVG` , `MIN` , `MAX` , `SUM` e `COUNT`

1. Monte um query que exiba:
   - A **média de duração** dos filmes e dê o nome da coluna de 'Média de Duração';
   - A **duração mínima** dos filmes como 'Duração Mínima';
   - A **duração máxima** dos filmes como 'Duração Máxima';
   - A **soma de todas** as durações como 'Tempo de Exibição Total';
   - E finalmente, a **quantidade total** de filmes cadastrados na tabela `sakila.film` como 'Filmes Registrados'.

	```sql
	SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
	FROM sakila.film;
	```

### Parte 6 - Exibindo e filtrando dados de forma agrupada com `GROUP BY` e `HAVING`

1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela `sakila.customer` que estão ativos e a quantidade que estão inativos.

   ```SQL
   SELECT active, COUNT(*) FROM sakila.customer
   GROUP BY active;
   ```

2. Monte uma query para a tabela `sakila.customer` que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o **ID da loja** , o **status dos clientes** (ativos ou inativos) e a **quantidade de clientes por status** .

   ```SQL
   SELECT store_id, active, COUNT(*) FROM sakila.customer
   GROUP BY store_id, active;

3. Monte uma query que exiba a **média de duração de locação** por **classificação indicativa** ( `rating` ) dos filmes cadastrados na tabela `sakila.film` . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

   ```SQL
   SELECT AVG(rental_duration) AS avg_rental_duration, rating 
   FROM sakila.film
   GROUP BY rating
   ORDER BY avg_rental_duration DESC;

4. Monte uma query para a tabela `sakila.address` que exiba o **nome do distrito** e a **quantidade** de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

   ```SQL
   SELECT district, COUNT(*) FROM sakila.address
   GROUP BY district ORDER BY COUNT(*) DESC;
   ```

   

5. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um `alias` (apelido) à coluna gerada por `AVG(length)` , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

      ```sql
      SELECT rating, AVG(length)
      FROM sakila.film
      GROUP BY rating;
      ```

      ```SQL
      SELECT rating, AVG(length) duracao_media
      FROM sakila.film
      GROUP BY rating
      HAVING duracao_media BETWEEN 115.0 AND 121.50
      ORDER BY duracao_media DESC;
      ```

6. Usando a query a seguir, exiba apenas os valores de **custo de substituição** que estão acima de $3950.50. Dê um `alias` que faça sentido para `SUM(replacement_cost)` , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

      ```sql
      SELECT rating, SUM(replacement_cost)
      FROM sakila.film
      GROUP by rating;
      ```

      ```SQL
      SELECT rating, SUM(replacement_cost) as custo_de_substituicao
      FROM sakila.film
      GROUP BY rating
      HAVING custo_de_substituicao  > 3950.50
      ORDER BY custo_de_substituicao;
      ```



