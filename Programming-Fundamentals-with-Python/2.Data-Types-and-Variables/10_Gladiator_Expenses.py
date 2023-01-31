number_of_lost_fights = int(input())
helmet_price = float(input())
sword_price = float(input())
shield_price = float(input())
armor_price = float(input())

total_helmets_broken = number_of_lost_fights // 2
total_swords_broken = number_of_lost_fights // 3
total_shield_broken = number_of_lost_fights // 6
total_armor_broken = total_shield_broken // 2
total_money = total_helmets_broken * helmet_price + total_swords_broken * sword_price + total_shield_broken * shield_price + total_armor_broken * armor_price

print(f"Gladiator expenses: {total_money:.2f} aureus")