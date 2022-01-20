def biggest_name(names):
    name = ""
    for n in names:

        if len(n) > len(name):
            name = n

    return name


print("Exercício 4")
print(biggest_name(["test", "teste", "megateste"]))
