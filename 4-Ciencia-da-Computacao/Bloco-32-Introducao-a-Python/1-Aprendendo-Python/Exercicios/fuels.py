def fuel_price(type, liters):
    price, discount = 0, 0
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print("Bonus - Exercício 4")
print(fuel_price("A", 5))
