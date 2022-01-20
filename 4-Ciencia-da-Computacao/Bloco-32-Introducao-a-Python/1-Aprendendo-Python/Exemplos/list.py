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
