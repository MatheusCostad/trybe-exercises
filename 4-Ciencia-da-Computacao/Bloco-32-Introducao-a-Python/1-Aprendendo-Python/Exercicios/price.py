def price(m2):
    quantity = (m2 / 3) / 18
    value = quantity * 80
    return (round(value, 2), round(quantity))


print("Exercício 5")
print(price(1000))
