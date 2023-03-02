product = input()
town = input()
quantity = float(input())


# eд. цена -> зависи от града и продукта

price = 0 #ед. цена

# проверка за града -> Sofia, Plovdiv, Varna
if town == "Sofia":
    # проверка за продукта
    if product == "coffee":
        price = 0.5
    elif product == "water":
        price = 0.8
    elif product == "beer":
        price = 1.2
    elif product == "sweets":
        price = 1.45
    elif product == "peanuts":
        price = 1.60
elif town == "Plovdiv":
    # проверка за продукта
    if product == "coffee":
        price = 0.4
    elif product == "water":
        price = 0.7
    elif product == "beer":
        price = 1.15
    elif product == "sweets":
        price = 1.30
    elif product == "peanuts":
        price = 1.50
elif town == "Varna":
    # проверка за продукта
    if product == "coffee":
        price = 0.45
    elif product == "water":
        price = 0.7
    elif product == "beer":
        price = 1.10
    elif product == "sweets":
        price = 1.35
    elif product == "peanuts":
        price = 1.55

# крайна сума = количество * ед. цена
sum = quantity * price
print(sum)