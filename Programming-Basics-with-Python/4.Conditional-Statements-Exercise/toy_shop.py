price_for_tour = float(input())
number_of_puzzles = int(input())
number_of_talking_dolls = int(input())
number_of_teddy_bears = int(input())
number_of_minions = int(input())
number_of_trucks = int(input())

order_sum = number_of_puzzles * 2.60 + number_of_talking_dolls * 3 + number_of_teddy_bears * 4.10 + \
            number_of_minions * 8.20 + number_of_trucks * 2

number_of_toys = number_of_puzzles + number_of_talking_dolls + number_of_teddy_bears + \
                 number_of_minions + number_of_trucks

if number_of_toys >= 50:
    order_sum -= order_sum * 0.25

rent = order_sum * 0.10

net_profit = order_sum - rent

diff = abs(net_profit - price_for_tour)

if net_profit >= price_for_tour:
    print(f'Yes! {diff:.2f} lv left.')
else:
    print(f'Not enough money! {diff:.2f} lv needed.')