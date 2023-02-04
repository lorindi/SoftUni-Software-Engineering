# входни данни
# сума за пилешки = бр. пил * 10.35
# сума за риба = бр. риба * 12.40
# сума за вегет = бр. вегетар * 8.15
# сума за менютата = сума от пилешки + сума от риба + сума от вегетарианско
# сума за десерт = 20 % от сума за менютата
# крайна сума = сума за менютата + 2.50 (доставка) + сума за десерт
# печатаме крайната сума

count_chicken_menu = int(input())
count_fish_menu = int(input())
count_vegetarian_menu = int(input())

sum_chicken_menu = count_chicken_menu * 10.35
sum_fish_menu = count_fish_menu * 12.40
sum_vegetarian_menu = count_vegetarian_menu * 8.15

total_sum_menu = sum_chicken_menu + sum_fish_menu + sum_vegetarian_menu
sum_dessert = 0.2 * total_sum_menu

final_sum = total_sum_menu + 2.50 + sum_dessert
print(final_sum)