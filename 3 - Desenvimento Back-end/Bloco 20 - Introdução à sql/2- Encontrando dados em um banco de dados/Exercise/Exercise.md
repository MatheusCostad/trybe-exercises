## Exercises

1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".

   ```sql
   SELECT 'This is SQL Exercise, Practice and Solution';
   ```

2. Escreva uma query para exibir três números em três colunas.

   ```sql
   SELECT 1, 2, 3;
   ```

3. Escreva uma query para exibir a soma dos números 10 e 15.

   ```sql
   SELECT 10 + 15;
   ```

4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

   ```sql
   SELECT 2 * 2;
   ```

5. Escreva uma query para exibir todas as informações de todos os cientistas.

   ```sql
   SELECT * FROM Scientists.Scientists;
   ```

6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.

   ```sql
   SELECT Name AS Nome_do_Projeto, Hours AS Tempo_de_Trabalho FROM Scientists.Projects;
   ```

7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

   ```sql
   SELECT Name FROM Scientists.Scientists
   ORDER BY Name;
   ```

8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

   ```sql
   SELECT Name FROM Scientists.Projects
   ORDER BY Name DESC;
   ```

9. Escreva uma query que exiba a string "O projeto `Name` precisou de `Hours` horas para ser concluído." para cada projeto.

   ```sql
   SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Scientists.Projects;
   ```

10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

    ```sql
    SELECT Name, Hours FROM Scientists.Projects
    ORDER BY Hours DESC LIMIT 3;
    ```

11. Escreva uma query para exibir o código de todos os projetos da tabela `AssignedTo` sem que haja repetições.

    ```sql
    SELECT DISTINCT Project FROM Scientists.AssignedTo;
    ```

12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

    ```sql
    SELECT Name FROM Scientists.Projects
    ORDER BY Hours DESC
    LIMIT 1;
    ```

13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

    ```sql
    SELECT Name FROM Scientists.Projects
    ORDER BY Hours
    LIMIT 1 OFFSET 1;
    ```

14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

    ```sql
    SELECT * FROM Scientists.Projects
    ORDER BY Hours
    LIMIT 5;
    ```

15. Escreva uma query que exiba a string "Existem `Number` cientistas na tabela Scientists.", em que `Number` se refira a quantidade de cientistas.

    ```sql
    SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') FROM Scientists.Scientists;
    ```

## Bônus

1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa `RBT` .

   ```sql
   USE PiecesProviders;
   SELECT Piece, Price FROM Provides
   WHERE Provider = 'RBT';
   ```

2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

   ```sql
   SELECT Piece, Price FROM Provides
   ORDER BY Price DESC LIMIT 5;
   ```

3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

   ```sql
   SELECT DISTINCT Provider, Price FROM Provides
   ORDER BY Price DESC
   LIMIT 4 OFFSET 2;
   ```

4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa `HAL` . Ordene o resultado pelos preços das peças de forma decrescente.

   ```sql
   SELECT * FROM Provides
   WHERE Provider = 'HAL'
   ORDER BY Price DESC;
   ```

5. Escreva uma query para exibir por quantas empresas a peça `1` é provida.

   ```sql
   SELECT COUNT(Provider) FROM Provides
   WHERE Piece = 1;
   ```

- **Exercício 7** : Usando `WHERE` , faça os exercícios [deste link ](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1).

  ```sql
  SELECT * FROM Customers WHERE City = 'Berlin';
  ```

- **Exercício 8** : Aplicando Restrições, faça os exercícios [deste link ](https://sqlbolt.com/lesson/select_queries_with_constraints).

  ```sql
  SELECT * FROM movies
  WHERE Id = 6;
  
  SELECT * FROM movies
  WHERE Year=>2000 AND Year<=2010;
  
  SELECT * FROM movies
  WHERE Year < 2000 OR Year > 2010;
  
  SELECT title, year FROM movies
  WHERE year <= 2003;
  ```
