number_of_orders = int(input())

total_sum = 0

for n in range(1,number_of_orders +1):
    price_per_capsule = float(input())
    days = int(input())
    capsules_count = int(input())

    order_price = price_per_capsule * days * capsules_count

    print(f"The price for the coffee is: ${order_price:.2f}")

    total_sum += order_price

print(f"Total: ${total_sum:.2f}")


