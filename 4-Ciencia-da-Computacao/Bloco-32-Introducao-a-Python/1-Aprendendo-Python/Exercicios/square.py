def square(n):
    line = n * "*"
    col = 0
    while n > col:
        print(line)
        col += 1


print("Exercício 3")
square(5)
