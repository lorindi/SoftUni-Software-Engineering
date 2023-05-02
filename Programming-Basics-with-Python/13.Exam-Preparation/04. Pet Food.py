count_days = int(input())
food_quantity = float(input())
total_biscuit = 0 # общо гр изядени бисквитки
total_dog = 0
total_cat = 0
# за всеки ден от първия до последния -> четене на 2 числа
for day in range(1, count_days + 1):
    # куче
    food_dog = int(input())
    total_dog += food_dog
    # котка
    food_cat = int(input())
    total_cat += food_cat

    # проверка дали има бисквитка
    if day % 3 == 0:
        biscuit = 0.10 * (food_dog + food_cat) # колко ми тежи бисквитката
        total_biscuit += biscuit

print(f'Total eaten biscuits: {round(total_biscuit)}gr.')

total_eaten_food = total_dog + total_cat
percent_eaten_food = total_eaten_food / food_quantity * 100
print(f'{percent_eaten_food:.2f}% of the food has been eaten.')

percent_dog = total_dog / total_eaten_food * 100
print(f'{percent_dog:.2f}% eaten from the dog.')

percent_cat = total_cat / total_eaten_food * 100
print(f'{percent_cat:.2f}% eaten from the cat.')