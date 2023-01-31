# tank = 255
number_of_lines = int(input())
capacity = 0
for n in range(1,number_of_lines + 1):
    liters_of_water = int(input())

    if liters_of_water + capacity <= 255:
        capacity += liters_of_water
        continue
    print("Insufficient capacity!")
print(capacity)



