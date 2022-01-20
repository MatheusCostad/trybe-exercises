# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.

print("Exercício 1")

a = 10
print("a", a)

b = 5
print("b", b)

print("----------------")

print("Soma:")
print("a + b =", a + b)
print("----------------")

print("Subtração:")
print("a - b =", a - b)
print("----------------")

print("Multiplicação:")
print("a * b =", a * b)
print("----------------")

print("Potenciação:")
print("a ** b =", a ** b)
print("----------------")

print("Divisão:")
print("a / b =", a / b)
print("----------------")

print("Divisão Inteira:")
print("a // b =", a // b)
print("----------------")

print("Módulo")
negative = b - a
print(f"abs({negative}) = ", abs(negative))
print("----------------")

# Exercício 2: Declare e inicialize uma variável: hours = 6 . Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

print("Exercício 2")

hours = 6
print(hours, "hours")
print("----------------")

minutes = hours * 60
print(minutes, "minutes")
print("----------------")

seconds = minutes * 60
print(seconds, "seconds")
print("----------------")

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.

print("Exercício 3")
print("Nada")
print("----------------")

# Exercício 4: Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

print("Exercício 4")

price = 24.20
firstTransportCost = 3
transportCost = 0.75
totalCopies = 60
transportPrice = firstTransportCost + ((totalCopies - 1) * transportCost)
totalPrice = ((transportPrice + (totalCopies * price)) * 60) / 100

print("Custo total:", totalPrice)
print("----------------")
