# ягоди, банани, портокали и малини
# сума за ягоди = цена за 1 кг * количество
# сума за малини = цена за 1 кг малини * количество
# сума за банани = цена за 1 кг * количество
# сума за портокали = цена за 1 кг * количество
# крайна сума = сума за ягодите + сума за банани + сума за портокалите + сума за малини

strawberry_price = float(input())
banana_quantity = float(input())
oranges_quantity = float(input())
raspberries_quantity = float(input())
strawberry_quantity = float(input())

# ягоди
strawberry_sum = strawberry_price * strawberry_quantity

# малини
raspberries_price = strawberry_price / 2
raspberries_sum = raspberries_price * raspberries_quantity

# банани
banana_price = raspberries_price - 0.8 * raspberries_price
banana_sum = banana_price * banana_quantity

# портокали
orange_price = raspberries_price - 0.4 * raspberries_price
orange_sum = orange_price * oranges_quantity

total_sum = strawberry_sum + raspberries_sum + banana_sum + orange_sum
print(f'{total_sum:.2f}')
