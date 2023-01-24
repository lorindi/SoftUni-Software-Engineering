budget = float(input())
price_for_one_kg_flour = float(input())

cozonacs_counter = 0
colored_eggs = 0

one_pack_of_eggs = price_for_one_kg_flour * 0.75
price_for_onel_milk = price_for_one_kg_flour * 1.25 / 4

one_cozonac_price = price_for_one_kg_flour + one_pack_of_eggs + price_for_onel_milk

while budget - one_cozonac_price > 0:
    budget -= one_cozonac_price
    cozonacs_counter += 1
    colored_eggs += 3
    if cozonacs_counter % 3 == 0:
        colored_eggs -= (cozonacs_counter - 2)
print(f"You made {cozonacs_counter} loaves of Easter bread! Now you have {colored_eggs} eggs and {budget:.2f}BGN left.")

