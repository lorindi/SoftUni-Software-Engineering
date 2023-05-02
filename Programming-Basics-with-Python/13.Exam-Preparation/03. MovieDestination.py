# крайна сума = бр. дни * цена за 1 ден (зависи от сезона и дестинацията)
# проверка за намаление / увеличение
# проверка дали бюджетът е достатъчен

budget = float(input())
destination = input()
season = input()
days = int(input())

price_per_day = 0 # цена за 1 ден

if season == "Summer":
    if destination == "Dubai":
        price_per_day = 40000
    elif destination == "Sofia":
        price_per_day = 12500
    elif destination == "London":
        price_per_day = 20250
elif season == "Winter":
    if destination == "Dubai":
        price_per_day = 45000
    elif destination == "Sofia":
        price_per_day = 17000
    elif destination == "London":
        price_per_day = 24000

# крайна сума
total_sum = days * price_per_day

# проверка за намаление / увеличение
if destination == "Dubai":
    total_sum = total_sum - 0.30 * total_sum # total_sum = 0.7 * total_sum
elif destination == "Sofia":
    total_sum = total_sum + 0.25 * total_sum # total_sum = 1.25 * total_sum

# достатъчен
if budget >= total_sum:
    left_money = budget - total_sum
    print(f"The budget for the movie is enough! We have {left_money:.2f} leva left!")
else: # budget < total_sum
    need_sum = total_sum - budget
    print(f"The director needs {need_sum:.2f} leva more!")