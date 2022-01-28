numbers = input("Insira os números de forma espaçada\n").split(" ")

sum = 0

for n in numbers:
    if not n.isdigit():
        print(f"Erro ao somar valores, {n} não é um dígito.")
    else:
        sum += int(n)

print(sum)
