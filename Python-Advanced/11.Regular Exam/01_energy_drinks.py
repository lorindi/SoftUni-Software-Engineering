from collections import deque

milligrams_of_caffeine = [int(el) for el in input().split(', ')]
energy_drinks = deque([int(el) for el in input().split(', ')])

caffeine = 0
max_caffeine = 300


while milligrams_of_caffeine and energy_drinks:
    milligrams = milligrams_of_caffeine.pop()
    drinks = energy_drinks.popleft()

    multiply = milligrams * drinks

    if multiply + caffeine <= max_caffeine:
        caffeine += multiply

    else:
        caffeine -= 30
        if caffeine < 0:
            caffeine = 0
        energy_drinks.append(drinks)


if energy_drinks:
    print(f"Drinks left: {', '.join([str(el) for el in energy_drinks])}")
else:
    print("At least Stamat wasn't exceeding the maximum caffeine.")

print(f"Stamat is going to sleep with {caffeine} mg caffeine.")




