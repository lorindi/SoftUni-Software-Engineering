# проверка за отстъпка за нощувката
# сума за нощувки = бр. нощувки * цена за 1 нощувка
# сума за доп. разходи = % от бюджета
# сума за почивка = сума за нощувки + сума за доп. разходи
# проверка дали бюджетът е достатъчен

budget = float(input())
count_nights = int(input())
price_per_night = float(input())
percent = int(input())

if count_nights > 7:
    price_per_night = price_per_night - 0.05 * price_per_night # price_per_night = 0.95 * price_per_night

sum_nights = count_nights * price_per_night
sum_extra = (percent / 100) * budget

total_sum = sum_nights + sum_extra

# достатъчен
if budget >= total_sum:
    left_money = budget - total_sum
    print(f'Ivanovi will be left with {left_money:.2f} leva after vacation.')
else: # не е достатъчен -> budget < total_sum
    need_money = total_sum - budget
    print(f"{need_money:.2f} leva needed.")
