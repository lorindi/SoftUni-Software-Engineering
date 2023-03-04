group_budget = int(input())
season = input()
fishermans = int(input())

spring_price = 3000
summer_price = 4200
autumn_price = 4200
winter_price = 2600

additional_discount = 0.00
trip_price = 0.00

if fishermans <= 6:
    additional_discount += 0.10
elif 7 <= fishermans <= 11:
    additional_discount += 0.15
elif fishermans >= 12:
    additional_discount += 0.25

if season == 'Summer' or season == 'Autumn':
    trip_price = summer_price - (summer_price * additional_discount)
elif season == 'Spring':
    trip_price = spring_price - (spring_price * additional_discount)
elif season == 'Winter':
    trip_price = winter_price - (winter_price * additional_discount)

if season != 'Autumn' and fishermans % 2 == 0:
    trip_price -= trip_price * 0.05

if group_budget >= trip_price:
    print(f'Yes! You have {group_budget - trip_price:.2f} leva left.')
else:
    print(f'Not enough money! You need {trip_price - group_budget:.2f} leva.')