budget = float(input())
number_of_extras = int(input())
price_for_clothing_for_one_extra = float(input())

price_for_decor = budget * 0.10
price_for_clothing = number_of_extras * price_for_clothing_for_one_extra

if number_of_extras > 150:
    price_for_clothing -= price_for_clothing * 0.10

total_costs = price_for_decor + price_for_clothing

diff = abs(budget - total_costs)

if total_costs <= budget:
    print('Action!')
    print(f'Wingard starts filming with {diff:.2f} leva left.')
else:
    print('Not enough money!')
    print(f'Wingard needs {diff:.2f} leva more.')