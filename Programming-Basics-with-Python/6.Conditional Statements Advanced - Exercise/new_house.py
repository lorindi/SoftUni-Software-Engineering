type_of_flowers = input()
number_of_flowers = int(input())
budget = int(input())
costs = 0

if type_of_flowers == "Roses":
    costs = number_of_flowers * 5
    if number_of_flowers > 80:
        costs -= costs * 0.10

elif type_of_flowers == "Dahlias":
    costs = number_of_flowers * 3.80
    if number_of_flowers > 90:
        costs -= costs * 0.15

elif type_of_flowers == "Tulips":
    costs = number_of_flowers * 2.80
    if number_of_flowers > 80:
        costs -= costs * 0.15

elif type_of_flowers == "Narcissus":
    costs = number_of_flowers * 3
    if number_of_flowers < 120:
        costs += costs * 0.15

elif type_of_flowers == "Gladiolus":
    costs = number_of_flowers * 2.50
    if number_of_flowers < 80:
        costs += costs * 0.20

diff = abs(budget - costs)

if budget >= costs:
    print(f'Hey, you have a great garden with {number_of_flowers} {type_of_flowers} and {diff:.2f} leva left.')
else:
    print(f'Not enough money, you need {diff:.2f} leva more.')