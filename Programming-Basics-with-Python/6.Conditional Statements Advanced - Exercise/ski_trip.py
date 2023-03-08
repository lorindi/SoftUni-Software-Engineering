days_for_stay = int(input())
type_of_room = input()
rating = input()
costs = 0

days_for_stay -= 1

if type_of_room == "room for one person":
    costs = 18 * days_for_stay

elif type_of_room == "apartment":
    costs = 25 * days_for_stay
    if days_for_stay < 10:
        costs -= costs * 0.30

    elif 10 <= days_for_stay <= 15:
        costs -= costs * 0.35

    elif days_for_stay > 15:
        costs -= costs * 0.50

elif type_of_room == "president apartment":
    costs = 35 * days_for_stay
    if days_for_stay < 10:
        costs -= costs * 0.10

    elif 10 <= days_for_stay <= 15:
        costs -= costs * 0.15

    elif days_for_stay > 15:
        costs -= costs * 0.20

if rating == 'positive':
    costs += costs * 0.25
elif rating == 'negative':
    costs -= costs * 0.10

print(f'{costs:.2f}')