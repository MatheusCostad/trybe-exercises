def avarage(list):
    sum = 0
    for numb in list:
        sum += numb
    return sum / len(list)


print("Exercício 2", avarage([1, 2, 3, 4, 5]))
