def smallest(numbers):
    small = numbers[1]
    for n in numbers:
        if n < small:
            small = n
    return small


print("Bonus - Exercício 1")
print(smallest([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
