trybe_course = ["Introdução", "Front-end", "Back-end"]

print(trybe_course)

print("Exercício 5")
trybe_course.append("Ciência da Computação")
print(trybe_course)


print("Exercício 6")
trybe_course[0] = "Fundamentos"
print(trybe_course)

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

print("Exercício 8")
print(info["nota"])

print("Exercício 9")
info["recorrente"] = "Sim"
print(info)

print("Exercício 10")
del info["origem"]
print(info)

print("Exercício 13")
factorial = 1
print("Initial value", 5)
for index in range(1, 6):
    factorial *= index
print("Factorial", factorial)


print("Exercício 14/15")
ratings = [6, 8, 5, 9, 10]
print("Old ratings", ratings)

for index, rating in enumerate(ratings):
    ratings[index] = rating * 10
    if (rating % 3) == 0:
        print(rating, "Múltiplo de 3")


print("new ratings", ratings)
