# Exercício 1:
# Faça um programa que solicite o nome de uma pessoa usuária
# e imprima-o na vertical.

name = input("Digite seu nome\n")

for index, character in enumerate(name):
    print(character)
