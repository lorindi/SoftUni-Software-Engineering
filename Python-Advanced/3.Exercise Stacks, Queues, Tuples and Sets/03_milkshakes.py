from collections import deque
chocolates = [int(x) for x in input().split(', ')]
milk_cups = deque([int(x) for x in input().split(', ')])
milkshakes = 0
while chocolates and milk_cups and milkshakes < 5:
    chocolate = chocolates.pop()
    milk_cup = milk_cups.popleft()
    if chocolate <= 0 and milk_cup <= 0:
        continue
    if chocolate <= 0:
        milk_cups.appendleft(milk_cup)
        continue
    if milk_cup <= 0:
        chocolates.append(chocolate)
        continue
    if chocolate == milk_cup:
        milkshakes += 1
    else:
        chocolates.append(chocolate - 5)
        milk_cups.append(milk_cup)
if milkshakes == 5:
    print(f"Great! You made all the chocolate milkshakes needed!")
else:
    print("Not enough milkshakes.")

if chocolates:
    print(f"Chocolate: {', '.join([str(x) for x in chocolates])}")
else:
    print(f"Chocolate: empty")

if milk_cups:
    print(f"Milk: {', '.join([str(x) for x in milk_cups])}")
else:
    print(f"Milk: empty")
